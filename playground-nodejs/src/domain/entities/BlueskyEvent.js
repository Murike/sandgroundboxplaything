export class eventObject {
    constructor({ recordType, recordDate }) {
        this.type = recordType;
        this.date = recordDate;
    }
}

export class postObject extends eventObject {
    constructor(args) {
        super(args);
        this.langs = args.recordLangs;
        this.content = args.recordContent;
    }
}
