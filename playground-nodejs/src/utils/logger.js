const logger = { 
    info: (message) => {const formatedMessage = `[INFO] ${message}`; console.log(formatedMessage); return formatedMessage;},
    error: (message) => { const formatedMessage = `[ERROR] ${message}`; console.log(formatedMessage); return formatedMessage;}
}

export default logger;
export const {info, error} = logger;