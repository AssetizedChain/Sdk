const express = require("express");
const app = express();
const assetRoutes = require("./routes/assets");

app.use(express.json());
app.use("/api/assets", assetRoutes);

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
