import KoaRouter from 'koa-router';

const router = new KoaRouter();

router.get('/health', (ctx) => {
  ctx.body = { message: 'Im fiiiiine' };
});

router.get('/login', (ctx) => {
  ctx.body = { token: '123546' };
});

export default router.routes();
