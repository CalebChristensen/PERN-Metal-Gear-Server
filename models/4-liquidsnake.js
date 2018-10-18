module.exports = function(sequelize, DataTypes) {
  return sequelize.define('liquidsnake',{
    username: DataTypes.STRING,
    authcomment: DataTypes.STRING(525000),
  });
};