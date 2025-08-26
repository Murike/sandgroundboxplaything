import { Transform } from 'node:stream';

const filterToMongo = async (collection, chunkFilter) => {
    return new Transform({
        objectMode: true,
        highWaterMark: 64,
        async transform(chunk, _enc, callback){
            try{
                const validChunk = await chunkFilter(chunk);
                if(validChunk){
                    console.log("INserting in database")
                    await collection.insertOne(chunk);
                    console.log("INserted in database")
                }
                this.push(chunk);
                callback();
            }catch(e){
                callback(e);
            }
        }
    })
}

export default filterToMongo;