import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  const ART_LEFT = 184;
  const ART_TOP = 152;

  const assetsDir = path.join(__dirname, 'public', 'assets');
  if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

  console.log('--- Refining Asset Extraction ---');

  async function extractAsset(name, relX, relY, width, height) {
    const absX = ART_LEFT + relX;
    const absY = ART_TOP + relY;
    const outPath = path.join(assetsDir, name);
    await sharp('design sections/Full Page.png')
      .extract({ left: Math.max(0, absX), top: Math.max(0, absY), width, height })
      .toFile(outPath);
    console.log(`Saved ${name} (${width}x${height})`);
  }

  // Logo from Navbar
  await extractAsset('golfio-logo.png', 70, 125, 200, 75);

  // Hero effortless golfer image: clean crop
  await extractAsset('hero-effortless.png', 1010, 955, 195, 210);

  // Golfer in green polo follow-through
  await extractAsset('golfer-swing.png', 0, 1420, 760, 1340);

  // Small capsule course in heading
  await extractAsset('capsule-course.png', 1260, 1530, 210, 95);

  // Section 3: Courses Carousel
  await extractAsset('course-swing.png', 85, 3020, 480, 580);
  await extractAsset('course-beginner.png', 595, 3020, 480, 580);
  // Discover world class inner photo:
  await extractAsset('course-featured-glove.png', 1105, 3310, 745, 680);

  // Section 4: About / Metrics
  await extractAsset('mosaic-3golfers.png', 820, 4510, 480, 480);
  await extractAsset('mosaic-putting.png', 470, 5000, 360, 360);
  await extractAsset('mosaic-ball-hand.png', 1250, 4860, 600, 600);

  // Section 5: Sessions 5 Cards
  await extractAsset('session-card-1.png', 78, 6320, 318, 645);
  await extractAsset('session-card-2.png', 412, 6320, 505, 465);
  await extractAsset('session-card-3.png', 932, 6320, 318, 645);
  await extractAsset('session-card-4.png', 1267, 6320, 318, 645);
  await extractAsset('session-card-5.png', 1602, 6320, 318, 645);

  // Section 6: Confidence Accordion
  // Two golfers photo - perfectly trimmed without top gray border
  await extractAsset('two-golfers.png', 80, 7655, 880, 695);
  // Active accordion thumbnail
  await extractAsset('accordion-golfer.png', 1595, 7865, 245, 260);

  // Section 7: Shop 4-Grid
  await extractAsset('shop-balls.png', 80, 8950, 635, 635);
  await extractAsset('shop-iron.png', 735, 8950, 1105, 635);
  await extractAsset('shop-cart.png', 80, 9615, 1150, 640);
  await extractAsset('shop-bag.png', 1250, 9615, 590, 640);

  // Section 8: Testimonials
  // Featured portrait in Card 02: clean crop
  await extractAsset('testimonial-portrait.png', 1265, 11460, 605, 520);
  await extractAsset('trusted-avatars.png', 690, 10880, 200, 70);

  // Section 9: Footer fairway background
  await extractAsset('footer-bg.png', 0, 12750, 1920, 1750);
  // Giant Golfio logo with swoosh and flag
  await extractAsset('footer-golfio-watermark.png', 80, 13400, 1760, 480);

  console.log('--- Refined Extraction Complete! ---');
}

run().catch(console.error);
