from flask_app.config.mysqlconnection import connectToMySQL

class Dojo:
    def __init__(self, db_data):
        self.id = db_data['id']
        self.name = db_data['name']
        self.created_at = db_data['created_at']
        self.updated_at = db_data['updated_at']
        # We create a list so that later we can add in all the burgers that are associated with a restaurant.
        self.ninjas = []

    @classmethod
    def save( cls , data ):
        query = "INSERT INTO dojos ( name , created_at , updated_at ) VALUES (%(name)s,NOW(),NOW());"
        return connectToMySQL('dojos_and_ninjas_schema').query_db( query, data)
    @classmethod
    def select_all(cls):
        query = "SELECT * FROM  dojos ORDER BY name ASC;"
        return connectToMySQL('dojos_and_ninjas_schema').query_db( query)

    @classmethod
    def select_name_one(cls, id):
        query = "SELECT name FROM  dojos WHERE id = %(id)s;"
        data = {
            'id': id
        }
        return connectToMySQL('dojos_and_ninjas_schema').query_db( query, data)

