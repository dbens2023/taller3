import Sequelize from "sequelize";

const db = new Sequelize("adopcioness","adopkk","adopcio452",{
    dialect: "mysql",
    host: "localhost"
});

export {db}