const db = require('../config/db');

class User {
    static async createTable() {
        const query = `CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            firstname VARCHAR(255) NOT NULL,
            lastname VARCHAR(255) NOT NULL,
            phone VARCHAR(20) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;
        try {
            await db.query(query);
            console.log('Users table created successfully');
        } catch (error) {
            console.error('Error creating users table:', error);
            throw error;
        }
    }

    //alter table to add role column
    static async alterTableToAddRole() {
        const query = `ALTER TABLE users ADD COLUMN IF NOT EXISTS role VARCHAR(50) DEFAULT 'user'`;
        try {
            await db.query(query);
            console.log('Role column added to users table successfully');
        } catch (error) {
            console.error('Error adding role column to users table:', error);
            throw error;
        }
    }

    //create a new user
    static async create(userData) {
        const { firstname, lastname, phone, email, password } = userData;
        const query = `INSERT INTO users (firstname, lastname, phone, email, password) 
                       VALUES ($1, $2, $3, $4, $5) RETURNING *`;
        const values = [firstname, lastname, phone, email, password];
        try {
            const result = await db.query(query, values);
            const returnedUser = result.rows[0];
            const excludedPasswordUser = {
                id: returnedUser.id,
                firstname: returnedUser.firstname,
                lastname: returnedUser.lastname,
                phone: returnedUser.phone,
                email: returnedUser.email,
                created_at: returnedUser.created_at,
                updated_at: returnedUser.updated_at,
            };
            return excludedPasswordUser;
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    }

    //get all users
    static async getAll() {
        const query = `SELECT * FROM users ORDER BY created_at DESC`;
        try {
            const result = await db.query(query);
            return result.rows;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    }

    //get user by id
    static async getById(id){
        const query = `SELECT * FROM users WHERE id = $1`;
        try {
            const result = await db.query(query, [id]);
            return result.rows[0];
        }catch (error) {
            console.error('Error fetching user by id:', error);
            throw error;
        }
    }

    //update user by id
    static async updateById(id, userData) {
        const { firstname, lastname, phone, email } = userData;
        const query = `UPDATE users SET firstname = $1, lastname = $2, phone = $3, email = $4, updated_at = CURRENT_TIMESTAMP WHERE id = $5 RETURNING *`;
        const values = [firstname, lastname, phone, email, id];
        try {
            const result = await db.query(query, values);
            return result.rows[0];
        }catch (error) {
            console.error('Error updating user by id:', error);
            throw error;
        }
    }

    //delete user by id
    static async deleteById(id) {
        const query = `DELETE FROM users WHERE id = $1 RETURNING *`;
        try {
            const result = await db.query(query, [id]);
            return result.rows[0];
        }catch (error) {
            console.error('Error deleting user by id:', error);
            throw error;
        }
    }

    //get user by email
    static async getByEmail(email) {
        const query = `SELECT * FROM users WHERE email = $1`;
        try {
            const result = await db.query(query, [email]);
            return result.rows[0];
        }catch (error) {
            console.error('Error fetching user by email:', error);
            throw error;
        }
    }

    // get stats
    static async getStats() {
        const query = `SELECT COUNT(*) AS total_users, 
                          COUNT(CASE WHEN created_at >= NOW() - INTERVAL '7 days' THEN 1 END) AS users_last_week,
                          COUNT(CASE WHEN created_at >= NOW() - INTERVAL '30 days' THEN 1 END) AS users_last_month
                       FROM users`;
        try {
            const result = await db.query(query);
            return result.rows[0];
        } catch (error) {
            console.error('Error fetching user stats:', error);
            throw error;
        }
    }

    // get user by email and password
    static async getByEmailAndPassword(email, password) {
        try {
            const query = `SELECT * FROM users WHERE email = $1 AND password = $2`;
            const result = await db.query(query, [email, password]);
            return result.rows[0];
        } catch (error) {
            console.error('Error fetching user by email and password:', error);
            throw error;
        }
    }

    //make user admin
    static async makeAdmin(id) {
        const query = `UPDATE users SET role = 'admin', updated_at = CURRENT_TIMESTAMP WHERE id = $1 RETURNING *`;
        try {
            const result = await db.query(query, [id]);
            return result.rows[0];
        } catch (error) {
            console.error('Error updating user role to admin:', error);
            throw error;
        }
    }
}

module.exports = User;
