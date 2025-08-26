import bskyFirehoseWS from '../../services/firehose-consumer/index.js';
import filterToMongo from '../../infra/streams/mongodb-stream.js'
import { MongoClient } from 'mongodb';

const blueskyMessageMonitor = async () => {
    console.log("######################## process.env.BSK_FIREHOSE_URI: ", process.env.BSK_FIREHOSE_URI)
    console.log("######################## process.env.MONGO_PORT: ", process.env.MONGO_PORT)

    const uri = `mongodb://localhost:${process.env.MONGO_PORT || 27017}/${process.env.MONGO_DBNAME}`;
    const dbClient = new MongoClient(uri);
    await dbClient.connect();
    
    const mongoStream = await filterToMongo(dbClient.db().collection('messages'), async (chunk) => chunk['0']?.content.toLowerCase().includes('what')
        )
    await bskyFirehoseWS(mongoStream);
}

export { blueskyMessageMonitor };