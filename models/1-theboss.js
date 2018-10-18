module.exports = function(sequelize, DataTypes) {
  return sequelize.define('theboss',{
    username: DataTypes.STRING,
    authcomment: DataTypes.STRING(525000),
  });
};