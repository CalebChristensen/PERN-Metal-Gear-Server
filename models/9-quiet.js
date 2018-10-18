module.exports = function(sequelize, DataTypes) {
  return sequelize.define('quiet',{
    username: DataTypes.STRING,
    authcomment: DataTypes.STRING(525000),
  });
};