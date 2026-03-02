const db = require('../config/db')


class Post{
    static async createTable() {
        const query = `CREATE TABLE IF NOT EXISTS posts (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            content TEXT NOT NULL,
            author_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;
        try {
            await db.query(query);
            console.log('Posts table created successfully');
        } catch (error) {
            console.error('Error creating posts table:', error);
            throw error;
        }
    }

    //create a new post
    static async create(postData) {
        const { title, content, author_id } = postData;
        const query = `INSERT INTO posts (title, content, author_id) 
                       VALUES ($1, $2, $3) RETURNING *`;
        const values = [title, content, author_id];
        try {
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (error) {
            console.error('Error creating post:', error);
            throw error;
        }
    }

    //get all posts
    static async getAll() {
        const query = `SELECT * FROM posts ORDER BY created_at DESC`;
        try {
            const result = await db.query(query);
            return result.rows;
        } catch (error) {
            console.error('Error fetching posts:', error);
            throw error;
        }
    }

    //get post by id
    static async getById(id) {
        const query = `SELECT * FROM posts WHERE id = $1`;
        try {
            const result = await db.query(query, [id]);
            return result.rows[0];
        } catch (error) {
            console.error('Error fetching post by id:', error);
            throw error;
        }
    }

    //get posts by author id
    static async getByAuthorId(author_id) {
        const query = `SELECT * FROM posts WHERE author_id = $1 ORDER BY created_at DESC`;
        try {
            const result = await db.query(query, [author_id]);
            return result.rows;
        } catch (error) {
            console.error('Error fetching posts by author id:', error);
            throw error;
        }
    }

    //update post by id
    static async updateById(id, postData) {
        const { title, content } = postData;
        const query = `UPDATE posts SET title = $1, content = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *`;
        const values = [title, content, id];
        try {
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (error) {
            console.error('Error updating post by id:', error);
            throw error;
        }
    }

    //delete post by id
    static async deleteById(id) {
        const query = `DELETE FROM posts WHERE id = $1 RETURNING *`;
        try {
            const result = await db.query(query, [id]);
            return result.rows[0];
        } catch (error) {
            console.error('Error deleting post by id:', error);
            throw error;
        }
    }
}

module.exports = Post