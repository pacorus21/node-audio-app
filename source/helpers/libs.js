module.exports.randomId = (length = 6) => {
    // Charspace
    const chars = 'abcdefghijklmnñopqrstuvwxyz0123456789';
    var id = '';

    for (let i = 0; i < length; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    return id;
}