const fs = require('fs');
const path = require('path');
const { Jimp } = require('jimp');
const potrace = require('potrace');

async function run() {
  const root = path.resolve(__dirname, '..');
  const inPath = path.join(root, 'src', 'assets', 'logo.png');
  const outPath = path.join(root, 'src', 'assets', 'logo.svg');
  const tempPath = path.join(root, 'tmp-logo-mask.png');

  if (!fs.existsSync(inPath)) {
    console.error('Input logo not found:', inPath);
    process.exit(1);
  }

  console.log('Reading', inPath);
  const img = await Jimp.read(inPath);

  // Resize to reasonable tracing resolution if very small / large
  const w = Math.min(1200, Math.max(400, img.bitmap.width));
  const h = Math.round((w / img.bitmap.width) * img.bitmap.height);
  img.resize({ w, h });

  // Convert to grayscale and apply adaptive threshold to isolate text
  img.greyscale();
  img.contrast(0.2); // contrast in v1 might be different
  img.bitwise = true;
  img.scan(0, 0, img.bitmap.width, img.bitmap.height, function (x, y, idx) {
    const val = this.bitmap.data[idx];
    // simple threshold
    const out = val < 200 ? 0 : 255;
    this.bitmap.data[idx + 0] = out;
    this.bitmap.data[idx + 1] = out;
    this.bitmap.data[idx + 2] = out;
  });

  await img.write(tempPath);
  console.log('Wrote temporary mask to', tempPath);

  potrace.trace(tempPath, { color: 'black', background: 'transparent', threshold: 128, turdSize: 100 }, function (err, svg) {
    if (err) {
      console.error('Trace error', err);
      process.exit(1);
    }

    // Wrap in a background similar to original (yellow) and return paths
    const wrapped = `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" viewBox=\"0 0 ${img.bitmap.width} ${img.bitmap.height}\">\n  <rect width=\"100%\" height=\"100%\" fill=\"#F9C80C\"/>\n  ${svg.replace('<svg', '<g').replace('</svg>', '</g>')}\n</svg>`;

    fs.writeFileSync(outPath, wrapped, 'utf8');
    fs.unlinkSync(tempPath);
    console.log('Wrote traced SVG to', outPath);
  });
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});



