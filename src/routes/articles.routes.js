module.exports = app => {
    const articles = require("../controllers/articles.controller.js");
    const { authJwt } = require("../middleware/index.js");
    var router = require("express").Router();

    router.post("/",[authJwt.verifyToken, authJwt.isAdmin], articles.create);
    router.get("/",[authJwt.verifyToken], articles.findAll);
    router.get("/:id", [authJwt.verifyToken], articles.findOne);
    router.patch("/:id", [authJwt.verifyToken,authJwt.isAdmin], articles.update);
    router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin], articles.delete);
    router.delete("/",[authJwt.verifyToken, authJwt.isAdmin], articles.deleteAll);
  
    app.use("/api/articles", router);
  };