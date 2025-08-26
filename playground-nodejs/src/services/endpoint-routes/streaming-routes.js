import KoaRouter from 'koa-router';
import fs from 'node:fs';

const router = new KoaRouter();

router.get('/video-test', (ctx) => {
    const range = ctx.header.range;
    if (!range) {
        return ctx.status(400).message('Wrong endpoint');
    }

    const videoSize = fs.statSync('C:\Users\ricar\Downloads\technical-challenges-recording.mp4').size;
    const chunkSize = 10 ** 6;

    const start = range;
    const end = Math.min(start + chunkSize, videoSize);

    ctx.header['content-range'] = `bytes ${start}-${end}/${videoSize}`;
    ctx.header['accept-ranges'] = 'bytes';
    ctx.header['content-length'] = chunkSize;
    ctx.header['content-type'] = 'video/mp4';
    ctx.header.status = 206;

    ctx.body = { message: 'Im fiiiiine' };
});

router.get('/login', (ctx) => {
    ctx.body = { token: '123546' };
});

export default router.routes();
