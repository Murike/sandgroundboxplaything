import { getActiveResourcesInfo } from 'node:process';

export function localProcessMonitoring() {
    console.log('Heaps used: ', process.memoryUsage().heapUsed);
    // const startDate = Date.now();
    // setImmediate(() => console.log('CUrrent lag: ', startDate - Date.now()));
    console.log('Active resources: ', getActiveResourcesInfo());
}
