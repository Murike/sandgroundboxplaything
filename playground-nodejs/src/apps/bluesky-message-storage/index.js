import bskyFirehoseWS from '../../services/firehose-consumer/index.js';
import filterToMongo from '../../infra/streams/mongodb-stream.js'
import { MongoClient } from 'mongodb';
import { error } from '../../utils/logger.js';

const blueskyMessageMonitor = async () => {
    const uri = `${process.env.MONGO_DBURL}:${process.env.MONGO_PORT || 27017}/${process.env.MONGO_DBNAME}`;
    const dbClient = new MongoClient(uri);
    
    try{
        await dbClient.connect();
    }catch(e){
        console.error(`Couldn't connect to MongoDB instance in ${MONGO_DBURL}:${process.env.MONGO_PORT}. ${e}`)
        throw new Error(e);
    }

    const mongoStream = await filterToMongo(dbClient.db().collection('messages'), async (chunk) => chunk['0']?.content.toLowerCase().includes('what'))
    await bskyFirehoseWS(mongoStream);
}

export { blueskyMessageMonitor };