const fs = require('fs');
module.exports = (req, res, next) => {
  const log = `${req.user.username} (${req.user.role}) logged in at ${new Date()}\n`;
  fs.appendFile('./logs/log.txt', log, (err) => {
    if (err) throw err;
  });
  next();
};
