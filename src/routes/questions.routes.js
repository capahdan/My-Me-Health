module.exports = app => {
    const questions = require("../controllers/questions.controller.js");
    const { authJwt } = require("../middleware/index.js");
    var router = require("express").Router();

    router.post("/",[authJwt.verifyToken, authJwt.isAdmin], questions.create);
    router.get("/",[authJwt.verifyToken], questions.findAll);
    router.get("/:id", [authJwt.verifyToken], questions.findOne);
    router.patch("/:id", [authJwt.verifyToken,authJwt.isAdmin], questions.update);
    router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin], questions.delete);
    router.delete("/",[authJwt.verifyToken, authJwt.isAdmin], questions.deleteAll);
  
    app.use("/api/questions", router);
  };