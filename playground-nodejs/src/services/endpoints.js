import Koa from 'koa';
// import defaultRoutes from './endpoint-routes/base-routes.js';
import streamingRoutes from './endpoint-routes/streaming-routes.js';

const app = new Koa();

app.use(streamingRoutes);
app.listen('3000');

export default app;
