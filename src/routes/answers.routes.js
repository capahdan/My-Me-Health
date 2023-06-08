module.exports = app => {
    const answers = require("../controllers/answers.controller.js");
    const { authJwt } = require("../middleware/index.js");
    var router = require("express").Router();

    router.post("/",[authJwt.verifyToken, authJwt.isAdmin], answers.create);
    router.get("/",[authJwt.verifyToken], answers.findAll);
    router.get("/:id", [authJwt.verifyToken], answers.findOne);
    router.patch("/:id", [authJwt.verifyToken,authJwt.isAdmin], answers.update);
    router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin], answers.delete);
    router.delete("/",[authJwt.verifyToken, authJwt.isAdmin], answers.deleteAll);
  
    app.use("/api/answers", router);
  };