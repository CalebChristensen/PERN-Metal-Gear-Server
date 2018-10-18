module.exports = (sequelize, DataTypes) => {
  return sequelize.define('characters', {
    nameOfCharacter: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    nationality: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    birth: {
      type: DataTypes.STRING,
      allowNull: false
    },
    death: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    favoriteWeapon: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  })
}