import { config } from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { info } from './utils/logger.js';
import { blueskyMessageMonitor } from './apps/bluesky-message-storage/index.js'
// import app from './services/endpoints.js';
// import app from './services/algorithms/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
config({ path: path.resolve(__dirname, '../.env') });

(async () => {
    console.log('BSK_FIREHOSE_URI?', process.env.BSK_FIREHOSE_URI);
    await blueskyMessageMonitor();
    info('Logging from module now');
})();
