const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser());

app.get("/", (req, res) => res.send("<h1>MEDIA-TRACKER-APP</h1>"));
app.get("/api/fail", (req, res) =>
  res.status(403).json({ msg: "You are not allowed to access this" })
);

app.use("/api/stock-item", require("./stock-item"));
app.listen(5000, () =>
  console.log("Server is listening For Media-Tracker-app on port 5000!")
);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();

// app.use(bodyParser());
// app.get("/", (req, res) => res.send("<h1>Hello World!</h1>"));

// app.get("/api/fail", (req, res) =>
//   res.status(403).json({ msg: "You are not allowed to access this" })
// );

// app.use("/api/stock", require("./stock"));

// app.listen(4000, () => console.log("Server is listening on port 4000!"));
