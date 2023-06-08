module.exports = (sequelize, Sequelize) => {
  const Articles = sequelize.define("articles", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    content: {
      type: Sequelize.STRING
    },
    images: {
      type: Sequelize.STRING
    }
  });

  return Articles;
};
