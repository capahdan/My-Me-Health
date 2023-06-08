module.exports = app => {
    const articles = require("../controllers/articles.controller.js");
    const { authJwt } = require("../middleware/index.js");

    app.post(
      "/api/articles/",
      [authJwt.verifyToken, authJwt.isAdmin],
       articles.create
      /* 	#swagger.tags = ['Articles']
        #swagger.description = 'Input articles' */

      /*	#swagger.parameters['obj'] = {
              in: 'body',
              description: 'ansswer information.',
              required: true,
             schema: { $ref: "#/definitions/AddArticle" }
      } */

      /* #swagger.security = [{
              "apiKeyAuth": []
      }] */ 
       );
    app.get(
      "/api/articles/",
      [authJwt.verifyToken], 
      articles.findAll
       /* 	#swagger.tags = ['Articles']
        #swagger.description = 'Get all articles' */

      /* #swagger.security = [{
              "apiKeyAuth": []
      }] */ );
    app.get(
      "/api/articles/:id", 
      [authJwt.verifyToken],
       articles.findOne
        /* 	#swagger.tags = ['Articles']
        #swagger.description = 'Get By Id articles' */

      /* #swagger.security = [{
              "apiKeyAuth": []
      }] */ 
       );
    app.patch(
      "/api/articles/:id",
       [authJwt.verifyToken,authJwt.isAdmin], 
       articles.update
        /* 	#swagger.tags = ['Articles']
        #swagger.description = 'Update articles' */

      /*	#swagger.parameters['obj'] = {
              in: 'body',
              description: 'ansswer information.',
              required: true,
             schema: { $ref: "#/definitions/UpdateArticle" }
      } */

      /* #swagger.security = [{
              "apiKeyAuth": []
      }] */ 
       );
    app.delete(
      "/api/articles/:id", 
      [authJwt.verifyToken, authJwt.isAdmin], 
      articles.delete
       /* 	#swagger.tags = ['Articles']
        #swagger.description = 'Delete articles' */

      /* #swagger.security = [{
              "apiKeyAuth": []
      }] */ 
      );
    app.delete(
      "/api/articles/",
      [authJwt.verifyToken, authJwt.isAdmin],
       articles.deleteAll
        /* 	#swagger.tags = ['Articles']
        #swagger.description = 'Delete articles' */

      /* #swagger.security = [{
              "apiKeyAuth": []
      }] */ 
       );
  
  };