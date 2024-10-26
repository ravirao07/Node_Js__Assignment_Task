const fs = require('fs');

const addID = (req, res, next) => {
    const heroes = JSON.parse(fs.readFileSync('./db.json', 'utf-8')).heroes;
    const lastID = heroes.length > 0 ? heroes[heroes.length - 1].id : 0;
    req.body.id = lastID + 1;
    next();
};

module.exports = addID;
