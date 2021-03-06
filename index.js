const express = require('express');

const app = express();
const port = 3000;
app.use(express.json());
app.use("/api", require("./students"));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});