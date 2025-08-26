import { Readable, Writable, Transform, pipeline } from 'node:stream';
import { parseFirehoseChunk } from '../../adapters/websocket/bluesky-firehose-adapter.js';


const firehoseEntry = new Readable({
    read() {},
});

firehoseEntry.on('pause', () => console.log('################### Pausing read stream'));

const firehoseEventParse = new Transform({
    objectMode: true,
    highWaterMark: 16,
    async transform(chunk, encoding, callback) {
        try {
            const decodedEvent = await parseFirehoseChunk(chunk);
            const canContinue = this.push({ ...decodedEvent });
            callback();

            if (!canContinue) {
                console.log('⚠️ Backpressure detected - stream will pause until downstream catches up');
            }
        } catch (error) {
            console.log('error: ', error);
            callback(error);
        }
    },
});

const firehoseWriteEnd = new Writable({
    objectMode: true,
    highWaterMark: 16,
    write(chunk, encoding, callback) {
        if (Object.keys(chunk).length > 0) console.log('Final stream step: ', chunk);
        callback();
    },
});

// const monitorInterval = setInterval(() => {
//     console.log('################### Streams state: ', {
//         sourceIsPaused: firehoseEntry.isPaused?.(),
//         transformBufferSize: firehoseEventParse.writableLength,
//         transformHighWaterMark: firehoseEventParse.writableHighWaterMark,
//         destinationBufferSize: firehoseWriteEnd.writableLength,
//         destinationHighWaterMark: firehoseWriteEnd.writableHighWaterMark,
//     });
// }, 1000);

// firehoseEntry.pipe(firehoseEventParse).pipe(firehoseWriteEnd);

export { firehoseEntry, firehoseEventParse, firehoseWriteEnd };
