const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", { docTitle: "Shop", path: "/admin/add-product" });
};

exports.postAddProduct = (req, res) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  res.render("shop", {
    prods: products,
    docTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
  });
};
