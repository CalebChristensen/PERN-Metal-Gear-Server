module.exports = function(sequelize, DataTypes) {
  return sequelize.define('raiden',{
    username: DataTypes.STRING,
    authcomment: DataTypes.STRING(525000),
  });
};