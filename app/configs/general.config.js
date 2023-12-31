module.exports = {
    DBConnectors: {
        host: process.env.DB_HOST || "db4free.net",
        port: process.env.DB_PORT || 3306,
        username: process.env.DB_USER || "sheeper",
        password: process.env.DB_PASSWORD || "H.S20T.H04",
        database: process.env.DB_NAME || "newDatabase",
        dialect: process.env.DB_DIALECT || "mysql",
    },
    jwtAuthKey: 'abcxyz',
    tokenLoginExpiredDays:'25 days'
};
