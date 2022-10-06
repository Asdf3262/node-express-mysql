// Customer table definition for Sequelize
module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customer", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.CHAR(100),
            allowNull: false
        },
        contact: {
            type: Sequelize.CHAR(100)
        },
        created_at: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        }
    }, {
        timestamps: false
    });

    return Customer;
};
