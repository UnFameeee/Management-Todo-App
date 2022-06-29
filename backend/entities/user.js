const EntitySchema = require('typeorm').EntitySchema;

module.exports = new EntitySchema({
    name: "User",
    tableName: "users",
    columns: {
        id: {
            primary: true, //primary key
            type: "int",
            generated: true
        },
        username: {
            type: "varchar"
        },
        password: {
            type: "varchar"
        },
        email: {
            type: "varchar"
        },
        password: {
            type: "varchar"
        },
        password: {
            type: "varchar"
        },

    }
})