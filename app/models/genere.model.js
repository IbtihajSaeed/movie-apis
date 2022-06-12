

const createGenereTable = (sequelize, Sequelize) => {
    const genere = sequelize.define("genere", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description:{
            type: Sequelize.TEXT,
            allowNull: false
        },
        IsDeleted:{
            type: Sequelize.BOOLEAN,
            defaultValue:0
        }

    });
    return genere;
};

module.exports = createGenereTable;