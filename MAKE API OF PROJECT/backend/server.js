const mongoose = require('mongoose');
const app = require('./app');
const dbConfig = require('./config/dbConfig');

mongoose.connect(dbConfig, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
