const logger = (req, res, next) => {
    const timestamp = new Date().toString();
    console.log(`URL: ${req.originalUrl}, Method: ${req.method}, Timestamp: ${timestamp}`);
    next();
};

module.exports = logger;
