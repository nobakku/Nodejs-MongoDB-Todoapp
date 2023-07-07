const mongoose = require("mongoose");

// データベースとサーバーを接続
const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("データベースと接続中・・・"))
    .catch((err) => console.error(err));
};

module.exports = connectDB;
