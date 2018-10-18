module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bigboss',{
    username: DataTypes.STRING,
    authcomment: DataTypes.STRING(525000),
  });
};