const express = require('express');
const cors = require('cors');
const route = require('./src/routes/medics.route');

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use('/medic', route);

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`),
);

