const db = require("../models");
const Questions = db.questions;
const Op = db.Sequelize.Op;

const getPagination = (page, size) => {
  const limit = size ? +size : 10;
  const offset = page ? (limit*(page-1) + 1) - 1 : 0;
  
  return { limit, offset };
};

const getPagingData = (data,limit,offset) => {
  const { count: totalItems, rows: questions } = data;
  
  return { total:totalItems, data:{questions}, limit, skip:offset };
};


// Retrieve all VehicleBrand from the database.
exports.findAll = (req, res) => {
  const question = req.query.question;

  const { page, size } = req.query;

  const {limit, offset} = getPagination(page, size);
  let condition = null

  if (question) {
    condition = { question: { [Op.iLike]: `%${question}%` } };
  }

  Questions.findAndCountAll({ where: condition, limit, offset })
    .then(data => {
      const response = getPagingData(data, limit, offset);
      res.send(response);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving questions."
      });
    });
};

// Create and Save a new Questions
exports.create = (req, res) => {
  // Validate request
  if (!req.body.question) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Questions
  const tutorial = {
    question: req.body.question,
  };

  // Save Questions in the database
  Questions.create(tutorial)
    .then(questions => {
      res.send(
        { message: "Question was Created successfully!" ,data:{questions}});
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Questions."
      });
    });
};

// Find a single Questions with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Questions.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Questions with id=" + id
      });
    });
};

// Update a Questions by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Questions.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Questions was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Questions with id=${id}. Maybe Questions was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Questions with id=" + id
      });
    });
};

// Delete a Questions with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Questions.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Questions was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Questions with id=${id}. Maybe Questions was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Questions with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Questions.destroy({
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
