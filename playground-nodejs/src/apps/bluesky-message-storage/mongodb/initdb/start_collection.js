db = db.getSiblingDB('bskydb');
if (!db.getCollectionNames().includes('messages')) {
    db.createCollection('messages', {
        capped: true,
        max: 1000
    });
}