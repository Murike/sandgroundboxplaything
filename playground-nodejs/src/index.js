import { config } from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { info } from './utils/logger.js';
import { blueskyMessageMonitor } from './apps/bluesky-message-storage/index.js'
// import app from './services/endpoints.js';
// import app from './services/algorithms/index.js';

import { Command } from 'commander';
import inquirer from 'inquirer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
config({ path: path.resolve(__dirname, '../.env') });

const mainMenuOptions = {
    'bluesky-firehose': () =>  blueskyMessageMonitor(),
    'algorithms-exercises': () => console.log("Not implemented"),
    'stream-monitoring': () => console.log("Not implemented")
}

// TODO - Use Blessed / Ink for better header management
// function printStickyHeader(appName) {
//     console.clear();
//     console.log(`=== ${appName} is running ===`);
//     console.log(`Press Ctrl+C to interrupt and exit.`);
//     console.log('---------------------------------\n');
// }

async function main() {
    console.log('##');
    const program = new Command();
    program
        .description("Hub for test applications")
        .argument('[app]', 'App to run directly (skips menu)', null)
        .action(async (app) => {
            let appChoice;
            
            if (app) {
                const availableApps = Object.keys(mainMenuOptions);
                const matchedApp = availableApps.find(availableApp => 
                    availableApp.toLowerCase() === app.toLowerCase()
                );
                
                if (matchedApp) {
                    appChoice = matchedApp;
                    console.log(`Starting ${matchedApp}...`);
                } else {
                    console.error(`App "${app}" not found. Available apps: ${availableApps.join(', ')}`);
                    return;
                }
            } else {
                // Show interactive menu
                const { appChoice: selectedApp } = await inquirer.prompt([{
                    type: 'list',
                    name: 'appChoice',
                    message: 'Which app will you run?',
                    choices: Object.keys(mainMenuOptions)
                }]);
                appChoice = selectedApp;
            }

            mainMenuOptions[appChoice]();
        });
    
    await program.parseAsync(process.argv);
};

main();