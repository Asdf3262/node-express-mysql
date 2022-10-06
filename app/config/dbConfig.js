module.exports = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    DB: process.env.DB_NAME,
    port: process.env.DB_PORT,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};