const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3250;

app.use(cors());

let a = app.use(
  express.static(__dirname )
);

app.get("/", (req, res) => {
  console.log(a);
  res.sendFile(
    __dirname + "/index.html"
  );
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
