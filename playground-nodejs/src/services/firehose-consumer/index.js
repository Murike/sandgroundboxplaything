import { blueskyEventsSetup } from '../../infra/bluesky/bluesky-client.js';

const bskyFirehoseWS = async (customTransform) => {
    return blueskyEventsSetup(process.env.BSK_FIREHOSE_URI, customTransform);
}
export default bskyFirehoseWS;
