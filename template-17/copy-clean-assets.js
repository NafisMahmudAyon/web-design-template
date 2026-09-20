import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ARTIFACT_DIR = 'C:\\Users\\AYON\\.gemini\\antigravity-ide\\brain\\da12978a-7fc7-4d41-922b-a50d5a2d9564';
const ASSETS_DIR = path.join(__dirname, 'public', 'assets');

const FILES_MAP = {
  'hero-clean-bg.jpg': 'hero_aerial_course_1789920140408.jpg',
  'hero-effortless.jpg': 'golfer_putting_effortless_1789920196360.jpg',
  'course-featured-glove.jpg': 'course_featured_glove_1789920360363.jpg',
  'course-swing.jpg': 'course_aerial_fairway_1789920388347.jpg',
  'course-beginner.jpg': 'course_bunker_fundamentals_1789920414230.jpg',
  'mosaic-3golfers.jpg': 'mosaic_three_golfers_1789920481803.jpg',
  'mosaic-ball-hand.jpg': 'mosaic_hand_yellow_ball_1789920511589.jpg',
  'mosaic-putting.jpg': 'mosaic_putting_legs_1789920536392.jpg',
  'session-card-1.jpg': 'session_golfer_stand_1789920982261.jpg',
  'session-card-2.jpg': 'course_aerial_fairway_1789920388347.jpg',
  'session-card-3.jpg': 'session_rolex_clock_1789920609741.jpg',
  'session-card-4.jpg': 'session_golf_irons_1789920689048.jpg',
  'session-card-5.jpg': 'session_rolling_fairway_1789921303980.jpg',
  'shop-iron.jpg': 'shop_iron_wedge_1789921373078.jpg',
};

for (const [destName, srcName] of Object.entries(FILES_MAP)) {
  const srcPath = path.join(ARTIFACT_DIR, srcName);
  const destPath = path.join(ASSETS_DIR, destName);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${srcName} -> ${destName}`);
  } else {
    console.warn(`File not found: ${srcPath}`);
  }
}
