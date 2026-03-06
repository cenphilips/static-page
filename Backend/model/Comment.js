const db = require('../config/db')


class Comment {
    static async createTable() {
        const query = `CREATE TABLE IF NOT EXISTS comments (
            id SERIAL PRIMARY KEY,
            content TEXT NOT NULL,
            post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
            user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;
        try {
            await db.query(query);
            console.log('comments table created successfully');
        } catch (error) {
            console.error('Error creating comments table:', error);
            throw error;
        }
    }

    //create a new comment
    static async create(commentData) {
        const { content, post_id, user_id } = commentData;
        const query = `INSERT INTO comments ( content, post_id, user_id) 
                       VALUES ($1, $2, $3) RETURNING *`;
        const values = [content, post_id, user_id];
        try {
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (error) {
            console.error('Error creating comments:', error);
            throw error;
        }
    }

    //get all comments
    static async getAll() {
        const query = `SELECT * FROM comments ORDER BY created_at DESC`;
        try {
            const result = await db.query(query);
            return result.rows;
        } catch (error) {
            console.error('Error fetching comments:', error);
            throw error;
        }
    }

    //get comments by id
    static async getById(id) {
        const query = `SELECT * FROM comments WHERE id = $1`;
        try {
            const result = await db.query(query, [id]);
            return result.rows[0];
        } catch (error) {
            console.error('Error fetching comments by id:', error);
            throw error;
        }
    }
    
    //get comments by post id
    static async getByPostId(post_id) {
        const query = `SELECT * FROM comments WHERE post_id = $1 ORDER BY created_at DESC`;
        try {
            const result = await db.query(query, [post_id]);
            return result.rows;
        } catch (error) {
            console.error('Error fetching comments by post id:', error);
            throw error;
        }
    }

    //get comments by user id
    static async getByUserId(user_id) {
        const query = `SELECT * FROM comments WHERE user_id = $1 ORDER BY created_at DESC`;
        try {
            const result = await db.query(query, [user_id]);
            return result.rows;
        } catch (error) {
            console.error('Error fetching comments by user id:', error);
            throw error;
        }
    }

    //update comments by id
    static async updateById(id, commentData) {
        const { content } = commentData;
        const query = `UPDATE comments SET content = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *`;
        const values = [content, id];
        try {
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (error) {
            console.error('Error updating comment by id:', error);
            throw error;
        }
    }

        //update comments by id
    static async updateById(id, commentData) {
        const { content } = commentData;
        const query = `UPDATE comments SET content = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *`;
        const values = [content, id];
        try {
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (error) {
            console.error('Error updating comment by id:', error);
            throw error;
        }
    }

    //delete comment by id
    static async deleteById(id) {
        const query = `DELETE FROM comments WHERE id = $1 RETURNING *`;
        try {
            const result = await db.query(query, [id]);
            return result.rows[0];
        } catch (error) {
            console.error('Error deleting comment by id:', error);
            throw error;
        }
    }
}

module.exports = Comment