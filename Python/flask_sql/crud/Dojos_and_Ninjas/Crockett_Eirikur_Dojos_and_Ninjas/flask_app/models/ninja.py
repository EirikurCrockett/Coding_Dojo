from flask_app.config.mysqlconnection import connectToMySQL

class Ninja:
    def __init__(self, db_data):
        self.id = db_data['id']
        self.fname = db_data['first_name']
        self.lname = db_data['lastt_name']
        self.age = db_data['age']
        self.created_at = db_data['created_at']
        self.updated_at = db_data['updated_at']

    @classmethod
    def save( cls , data ):
        query = "INSERT INTO ninjas ( first_name, last_name, age, dojo_id, created_at , updated_at ) VALUES (%(fname)s, %(lname)s, %(age)s, %(dojo_id)s,NOW(),NOW());"
        return connectToMySQL('dojos_and_ninjas_schema').query_db(query,data)

    @classmethod
    def select_all_by_dojo(cls, id):
        query = "SELECT * FROM ninjas where dojo_id = %(dojo_id)s;"
        data = {
            'dojo_id': id
        }
        return connectToMySQL('dojos_and_ninjas_schema').query_db(query,data)
