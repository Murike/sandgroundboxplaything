import ws from 'ws';
import { firehoseEntry, firehoseEventParse, firehoseWriteEnd } from '../../infra/streams/bluesky-stream.js';
import { pipeline } from 'node:stream';

function connectionProc(ws, req) {
    console.log(`Connection to ${process.env.BSK_FIREHOSE_URI} confirmed`);
}

function disconnectProc(ws, req) {
    process.stdout.write('\x1Bc');
    console.log(`Disconnected from ${process.env.BSK_FIREHOSE_URI}`);
}

export function blueskyEventsSetup(firehoseURI, externalTransform) {
    const bskws = new ws(firehoseURI);
    
    // if(externalTransform) 
    //     firehoseEntry.pipe(firehoseEventParse).pipe(externalTransform).pipe(firehoseWriteEnd);
    // else
    //     firehoseEntry.pipe(firehoseEventParse).pipe(firehoseWriteEnd);

    const chain = externalTransform
        ? [firehoseEntry, firehoseEventParse, externalTransform, firehoseWriteEnd]
        : [firehoseEntry, firehoseEventParse, firehoseWriteEnd];
    
    pipeline(...chain, (err) => {
        if (err) console.error('Pipeline failed:', err);
    });

    bskws.on('open', connectionProc);
    bskws.on('message', (data) => firehoseEntry.push(data));
    bskws.on('close', disconnectProc);

    return bskws;
}
