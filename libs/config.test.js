module.exports = {
    database: 'todo-app',
    username: 'root',
    password: 'root',
    params: {
        dialect: 'mysql',
        logging: false,
        define: {
            underscored: true
        }
    },
    jwtSecret: 'NTa$k-TEST',
    jwtSession: { session: false}
};