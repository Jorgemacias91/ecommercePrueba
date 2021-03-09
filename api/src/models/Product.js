const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

//CAMBIO REALIZADO POR ANDRES
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define("product", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});
};
//CAMBIO REALIZADO POR MATIAS
