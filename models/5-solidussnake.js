module.exports = function(sequelize, DataTypes) {
  return sequelize.define('solidussnake',{
    username: DataTypes.STRING,
    authcomment: DataTypes.STRING(525000),
  });
};