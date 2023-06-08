const db = require("../models");
const Articles = db.articles;
const Op = db.Sequelize.Op;

const getPagination = (page, size) => {
  const limit = size ? +size : 10;
  const offset = page ? (limit*(page-1) + 1) - 1 : 0;
  
  return { limit, offset };
};

const getPagingData = (data,limit,offset) => {
  const { count: totalItems, rows: articles } = data;
  
  return { total:totalItems, data:{articles}, limit, skip:offset };
};


// Retrieve all VehicleBrand from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  const description = req.query.description;
  const content = req.query.content;
  const user_id = req.query.user_id;
  const { page, size } = req.query;

  const {limit, offset} = getPagination(page, size);
  let condition = null

  if (title) {
    condition = { title: { [Op.iLike]: `%${title}%` } };
  }

  if (description) {
    condition.description = { [Op.iLike]: `%${description}%` };
  }

  if (content) {
    condition.content = { [Op.eq]: `${content}` } ;
  }

  if (user_id) {
    condition.user_id = { [Op.eq]: `${user_id}` } ;
  }
 


  Articles.findAndCountAll({ where: condition, limit, offset })
    .then(data => {
      const response = getPagingData(data, limit, offset);
      res.send(response);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving articles."
      });
    });
};

// Create and Save a new Articles
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Articles
  const article = {
    title: req.body.title,
    description: req.body.description,
    content: req.body.content,
    user_id: req.body.user_id,
    images: req.body.images
  };

  // Save Articles in the database
  Articles.create(article)
    .then(articles => {
      res.send(
        { message: "VehicleBrand was Created successfully!" ,data:{articles}});
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Articles."
      });
    });
};

// Find a single Articles with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Articles.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Articles with id=" + id
      });
    });
};

// Update a Articles by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Articles.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Articles was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Articles with id=${id}. Maybe Articles was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Articles with id=" + id
      });
    });
};

// Delete a Articles with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Articles.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Articles was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Articles with id=${id}. Maybe Articles was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Articles with id=" + id
      });
    });
};

// Delete all Articles from the database.
exports.deleteAll = (req, res) => {
  Articles.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};
