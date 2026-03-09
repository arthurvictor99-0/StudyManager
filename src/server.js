const express = require('express');
const cors = require('cors');
require('express-async-errors');

const userRoutes = require('./routes/userRoutes');

const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());


app.use('/users', userRoutes);

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 StudyManager API rodando em http://localhost:${PORT}`);
});