const db = require('../db');
//User constructor
function User ({
    id,
  name, 
  age
}) {
    this.name = name;
    this.age = age;
    this.id = id;
};
// add a createUser method to the prototype
User.prototype.createUser = async function() {
    try {
        const { rows } = await db.query(
            `INSERT INTO company(id, name, age) 
            VALUES ($1, $2, $3)`,
            [this.id, this.name, this.age]
        );
        return rows; 
    } catch (error) {
        throw error;
    }
};
module.exports = User;