const express = require("express");
const router = express.Router();
router.get("/add-product", (req, res, next) => {
    res.send(
        `<form action="/product/add-product" method="POST">
<input type="text" name="title">
<button type="submit">Create Product</button>
</form>`
    );
});
router.post("/add-product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});
module.exports = router;

//app.js
const express = require("express");
const bodyParser = require("body-parser");
const shopRoutes = require("./routes/shop.routes.js");
const productRoutes = require("./routes/product.routes.js");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/product", productRoutes); app.use(shopRoutes);
app.listen(5000);

