const fs = require('fs');
const path = require('path');
const { Jimp } = require('jimp');
const potrace = require('potrace');

async function run() {
  const root = path.resolve(__dirname, '..');
  const inPath = path.join(root, 'src', 'assets', 'primeLogo.png');
  const outPath = path.join(root, 'src', 'assets', 'primeLogo.svg');
  const tempPath = path.join(root, 'tmp-prime-logo-mask.png');

  if (!fs.existsSync(inPath)) {
    console.error('Input logo not found:', inPath);
    process.exit(1);
  }

  console.log('Reading', inPath);
  const img = await Jimp.read(inPath);

  const w = Math.min(1200, Math.max(400, img.bitmap.width));
  const h = Math.round((w / img.bitmap.width) * img.bitmap.height);
  img.resize({ w, h });

  img.greyscale();
  img.contrast(0.2);

  // Create two masks: one for dark glyphs and one for light glyphs (inverted),
  // then trace both and combine the resulting paths. This captures text
  // rendered in either black or white on a dark background.
  const tempPathA = path.join(root, 'tmp-prime-logo-mask-a.png');
  const tempPathB = path.join(root, 'tmp-prime-logo-mask-b.png');

  img.scan(0, 0, img.bitmap.width, img.bitmap.height, function (x, y, idx) {
    const val = this.bitmap.data[idx];
    const out = val < 200 ? 0 : 255; // dark glyphs -> black
    this.bitmap.data[idx + 0] = out;
    this.bitmap.data[idx + 1] = out;
    this.bitmap.data[idx + 2] = out;
  });
  await img.write(tempPathA);
  console.log('Wrote temporary mask A to', tempPathA);

  // Invert original image to pick up light glyphs (white letters)
  const img2 = img.clone();
  img2.scan(0, 0, img2.bitmap.width, img2.bitmap.height, function (x, y, idx) {
    const val = this.bitmap.data[idx];
    const out = val < 128 ? 255 : 0; // invert threshold to capture the other set
    this.bitmap.data[idx + 0] = out;
    this.bitmap.data[idx + 1] = out;
    this.bitmap.data[idx + 2] = out;
  });
  await img2.write(tempPathB);
  console.log('Wrote temporary mask B to', tempPathB);

  // Trace both masks and combine their SVG path groups
  potrace.trace(tempPathA, { color: 'black', background: 'transparent', threshold: 128, turdSize: 100 }, function (errA, svgA) {
    if (errA) {
      console.error('Trace error A', errA);
      process.exit(1);
    }

    potrace.trace(tempPathB, { color: 'black', background: 'transparent', threshold: 128, turdSize: 100 }, function (errB, svgB) {
      if (errB) {
        console.error('Trace error B', errB);
        process.exit(1);
      }

      // Extract inner SVG groups and concatenate
      const groupA = svgA.replace(/<svg[^>]*>/, '').replace(/<\/svg>/, '');
      const groupB = svgB.replace(/<svg[^>]*>/, '').replace(/<\/svg>/, '');

      const wrapped = `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" viewBox=\"0 0 ${img.bitmap.width} ${img.bitmap.height}\">\n  <g>${groupA}\n${groupB}</g>\n</svg>`;

      fs.writeFileSync(outPath, wrapped, 'utf8');
      try { fs.unlinkSync(tempPathA); } catch (e) {}
      try { fs.unlinkSync(tempPathB); } catch (e) {}
      console.log('Wrote traced SVG to', outPath);
    });
  });
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

