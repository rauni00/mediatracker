var express = require("express");
var router = express.Router();

const MediaItem = [
  {
    id: 1,
    name: "RAHUL RAUNIYAR",
    medium: "Series",
    category: "Science Friction",
    year: 2010,
    watchOn: "10/10/2017",
    Desc: "This Is The Best Movie I Have Ever Seen.",
    isFavorite: false,
  },
  {
    id: 1,
    name: "FreeGuy",
    medium: "Movie",
    category: "Science ,Coding",
    year: 2020,
    watchOn: "20/02/2002",
    Desc: "Coding Movie",
    isFavorite: false,
  },

  {
    id: 1,
    name: "Money ",
    medium: "Web series",
    category: "Bank",
    year: 2018,
    watchOn: "01/02/2002",
    Desc: "Technology movies",
    isFavorite: false,
  },
];

router.get("/", (req, res) => {
  var query = (req.query["q"] || "").toLowerCase();
  if (query) {
    const foundStocks = MediaItem.filter(
      (MediaItem) => MediaItem.name.toLowerCase().indexOf(query) != -1
    );
    return res.status(200).json(foundStocks);
  }
  return res.status(200).json(MediaItem);
});

// router.post("/", (req, res) => {
//   let MediaItem = req.body;
//   let foundStock = MediaItem.find((each) => each.code === MediaItem.code);
//   if (foundStock) {
//     return res
//       .status(400)
//       .json({ msg: "Stock with code " + stock.code + " already exists" });
//   }
//   stocks.push(stock);
//   return res
//     .status(200)
//     .json({ msg: "Stock with code " + stock.code + " successfully created" });
// });

module.exports = router;

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var express = require("express");
// var router = express.Router();

// const stocks = [
//   {
//     name: "Test Stock Company",
//     code: "TSC",
//     price: 85,
//     previousPrice: 80,
//     exchange: "NASDAQ",
//     favorite: false,
//   },
//   {
//     name: "Second Stock Company",
//     code: "SSC",
//     price: 10,
//     previousPrice: 20,
//     exchange: "NSE",
//     favorite: false,
//   },
//   {
//     name: "Last Stock Company",
//     code: "LSC",
//     price: 876,
//     previousPrice: 765,
//     exchange: "NYSE",
//     favorite: false,
//   },
// ];

// router.get("/", (req, res) => {
//   var query = (req.query["q"] || "").toLowerCase();
//   if (query) {
//     const foundStocks = stocks.filter(
//       (stock) => stock.name.toLowerCase().indexOf(query) != -1
//     );
//     return res.status(200).json(foundStocks);
//   }
//   return res.status(200).json(stocks);
// });

// router.post("/", (req, res) => {
//   let stock = req.body;
//   let foundStock = stocks.find((each) => each.code === stock.code);
//   if (foundStock) {
//     return res
//       .status(400)
//       .json({ msg: "Stock with code " + stock.code + " already exists" });
//   }
//   stocks.push(stock);
//   return res
//     .status(200)
//     .json({ msg: "Stock with code " + stock.code + " successfully created" });
// });

// router.patch("/:code", (req, res) => {
//   let stockCode = req.params.code;
//   let foundStock = stocks.find((each) => each.code === stockCode);
//   if (foundStock) {
//     foundStock.favorite = req.body.favorite;
//     let msg = "Stock with code " + stockCode + " is now ";
//     msg += foundStock.favorite ? " favorited." : " unfavorited";
//     return res.status(200).json({ msg: msg });
//   }
//   return res
//     .status(400)
//     .json({ msg: "Stock with code " + stockCode + " not found!" });
// });

// module.exports = router;
