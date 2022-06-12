

const createMovieTable = (sequelize, Sequelize) => {
    const movie = sequelize.define("movie", {
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
        genreId:{
            type: Sequelize.INTEGER,
            allowNull: false,
            foreignKey: true, 
            references: {
                model: 'generes', // 'genere' refers to table name
                key: 'id', // 'id' refers to column name in genere table
             }
        },
        rating:{
            type: Sequelize.INTEGER,
        },
        duration:{
            type: Sequelize.FLOAT,
        },
        releaseDate:{
            type: Sequelize.DATE,
        },
        IsDeleted:{
            type: Sequelize.BOOLEAN,
            defaultValue:0
        }

    });
   
    return movie;
};

module.exports = createMovieTable;