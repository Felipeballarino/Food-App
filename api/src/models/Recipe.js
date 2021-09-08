const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID, // Genera un numero random unico
      defaultValue:DataTypes.UUIDV4,
      primaryKey:true,
      allowNull:false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    score:{
      type:DataTypes.STRING,
      allowNull:true
    },
    instructions:{
      type:DataTypes.TEXT,
      allowNull:true
    },
    imagen:{
      type:DataTypes.STRING,
      allowNull:true  
    },
    createInDB:{  
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:true
    }
    
  }, { timestamps: false });
};
