module.exports = function(sequelize, DataTypes) {
  return sequelize.define('solidsnake',{
    username: DataTypes.STRING,
    authcomment: DataTypes.STRING(525000),
  });
};