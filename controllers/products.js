const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", { docTitle: "Shop", path: "/admin/add-product" });
};

exports.postAddProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      docTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
    });
  });
};
