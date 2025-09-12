import { Decoder } from 'cbor';
import { CarBlockIterator } from '@ipld/car';
import { CID } from 'multiformats/cid';
import { postObject } from '../../domain/entities/BlueskyEvent.js';

export async function parseFirehoseChunk(data) {
    const [header, body] = await Decoder.decodeAll(new Uint8Array(data));
    const relevantParsedBlocks = [];

    if (!body.ops) return;
    for (const op of body.ops) {
        if (!op.cid) continue;

        const cidBytes = op.cid.value.subarray(1);
        const recordCid = CID.decode(cidBytes);

        const iterator = await CarBlockIterator.fromBytes(body.blocks);
        for await (const block of iterator) {
            if (block.cid.toString() == recordCid.toString()) {
                const friendlyRecord = Decoder.decodeFirstSync(new Uint8Array(block.bytes));

                const recordType = friendlyRecord.$type.split('.')[friendlyRecord.$type.split('.').length - 1];
                const recordLangs = friendlyRecord.langs;
                const recordDate = friendlyRecord.createdAt;
                const recordContent = friendlyRecord.text;

                switch (recordType) {
                    case 'post':
                        relevantParsedBlocks.push(new postObject({ recordType, recordLangs, recordDate, recordContent }));
                }
            }
        }
    }

    return relevantParsedBlocks;
}
