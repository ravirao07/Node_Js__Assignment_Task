const express = require('express');
const bodyParser = require('body-parser');
const heroesRouter = require('./routes/heroes');
const logger = require('./middlewares/logger');

const app = express();
app.use(bodyParser.json());
app.use(logger);  // Log each request
app.use('/heroes', heroesRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
