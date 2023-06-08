module.exports = (sequelize, Sequelize) => {
  const Questions = sequelize.define("questions", {
    question: {
      type: Sequelize.STRING
    }
  });

  return Questions;
};
