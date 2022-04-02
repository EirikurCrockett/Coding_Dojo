from flask_app.config.mysqlconnection import connectToMySQL

class User:
    def __init__(self, db_data):
        self.id = db_data['id']
        self.name = db_data['name']
        self.description = db_data['description']
        self.instructions = db_data['instructions']
        self.under_30 = db_data['under_30']
        self.date_made = db_data['date_made']
        self.created_at = db_data['created_at']
        self.updated_at = db_data['updated_at']
        self.user_id = db_data['user_id']


    @classmethod
    def select_all(cls):
        query = "SELECT * FROM recipes;"
        return connectToMySQL('recipes').query_db(query)
    
    @classmethod
    def select_by_id(cls, data):
        query = "SELECT * FROM recipes WHERE id = %(id)s;"
        return connectToMySQL('recipes').query_db(query, data)

    @classmethod
    def save(cls, data):
        query = "INSERT INTO recipes ( name, description, instructions, under_30, date_made, created_at , updated_at, user_id ) VALUES (%(name)s, %(description)s, %(instructions)s, %(under_30)s, %(date_made)s, NOW(), NOW(), %(user_id)s);"
        return connectToMySQL('recipes').query_db(query, data)

    @classmethod
    def update(cls, data):
        query = "UPDATE recipes SET name = %(name)s, description = %(description)s, instructions = %(instructions)s, under_30 = %(under_30)s, date_made = %(date_made)s updated_at = NOW(),  WHERE id=%(id)s;"
        return connectToMySQL('recipes').query_db(query, data)

    @classmethod
    def delete(cls, data):
        query = "DELETE FROM recipe WHERE id = %(id)s;"
        return connectToMySQL('recipes').query_db(query, data)