module.exports = {
    database: 'todo-app',
    username: 'root',
    password: 'root',
    params: {
        dialect: 'mysql',
        define: {
            underscored: true
        }
    },
    jwtSecret: 'NTa$k-AP1',
    jwtSession: {session: false}
};