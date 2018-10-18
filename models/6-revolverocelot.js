module.exports = function(sequelize, DataTypes) {
  return sequelize.define('revolverocelot',{
    username: DataTypes.STRING,
    authcomment: DataTypes.STRING(525000),
  });
};