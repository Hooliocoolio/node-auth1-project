
exports.up = function(knex) {
//-----------------------------------------------------------------------------
// creates users table
//-----------------------------------------------------------------------------
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments('id')
                .unique
            tbl.string('username')
                .notNullable()
                .unique()
            tbl.string('password')
        })
  
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users')
};
