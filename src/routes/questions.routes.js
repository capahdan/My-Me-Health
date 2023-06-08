module.exports = app => {
    const questions = require("../controllers/questions.controller.js");
    const { authJwt } = require("../middleware/index.js");
  
    app.post(
      "/api/questions/",
      [authJwt.verifyToken, authJwt.isAdmin],
       questions.create
      /* 	#swagger.tags = ['Questions']
        #swagger.description = 'Input Question' */

      /*	#swagger.parameters['obj'] = {
              in: 'body',
              description: 'ansswer information.',
              required: true,
             schema: { $ref: "#/definitions/AddQuestion" }
      } */

      /* #swagger.security = [{
              "apiKeyAuth": []
      }] */ 
       );
    app.get(
      "/api/questions/",
      [authJwt.verifyToken],
       questions.findAll
       /* 	#swagger.tags = ['Questions']
        #swagger.description = 'Get all Question' */

      /* #swagger.security = [{
              "apiKeyAuth": []
      }] */ 
       );
    app.get(
      "/api/questions/:id",
       [authJwt.verifyToken], 
       questions.findOne
       /* 	#swagger.tags = ['Questions']
        #swagger.description = 'Get By Id Question' */

      /* #swagger.security = [{
              "apiKeyAuth": []
      }] */ 
       );
    app.patch(
      "/api/questions/:id", 
      [authJwt.verifyToken,authJwt.isAdmin],
       questions.update
       /* 	#swagger.tags = ['Questions']
        #swagger.description = 'Update Question' */

      /*	#swagger.parameters['obj'] = {
              in: 'body',
              description: 'ansswer information.',
              required: true,
             schema: { $ref: "#/definitions/UpdateQuestion" }
      } */

      /* #swagger.security = [{
              "apiKeyAuth": []
      }] */ 
       );
    app.delete(
      "/api/questions/:id", 
      [authJwt.verifyToken, authJwt.isAdmin],
       questions.delete
       /* 	#swagger.tags = ['Questions']
        #swagger.description = 'Delete By Id Question' */

      /* #swagger.security = [{
              "apiKeyAuth": []
      }] */ 
       );
    app.delete(
      "/api/questions/",
      [authJwt.verifyToken, authJwt.isAdmin],
       questions.deleteAll
       /* 	#swagger.tags = ['Questions']
        #swagger.description = 'Delete All Question' */

      /* #swagger.security = [{
              "apiKeyAuth": []
      }] */ 
       );
  
  };