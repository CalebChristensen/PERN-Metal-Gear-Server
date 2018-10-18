module.exports = function(sequelize, DataTypes) {
  return sequelize.define('eva',{
    username: DataTypes.STRING,
    authcomment: DataTypes.STRING(525000),
  });
};