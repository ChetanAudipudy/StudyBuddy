module.exports = function(sequelize, DataTypes) {
	var Unit = sequelize.define("Unit", {
		unitName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		description: {
			type: DataTypes.STRING,
		}
	});

	Unit.associate = function(models) {
		Unit.belongsTo(models.User, {
			foreignKey: {
				allowNull: false
			}
		});
		Unit.hasMany(models.Card, {
			onDelete: "cascade"
		});
	};

	return Unit;
};