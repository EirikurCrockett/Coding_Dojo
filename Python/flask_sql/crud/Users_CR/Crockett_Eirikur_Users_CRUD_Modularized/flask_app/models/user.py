from flask_app.config.mysqlconnection import connectToMySQL

class User:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']

    @classmethod
    def select_all(cls):
        query = "SELECT * FROM users;"

        results = connectToMySQL('users').query_db(query)

        users = []

        for user in results:
            users.append( cls(user) )
        return users
    
    @classmethod
    def insert(cls, data ):
        query = "INSERT INTO users ( first_name , last_name , email, created_at, updated_at ) VALUES ( %(fname)s , %(lname)s , %(email)s , NOW() , NOW() );"

        return connectToMySQL('users').query_db( query, data )
    
    @classmethod
    def select_by_id(cls, id):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        data = {
            'id': id
        }
        results = connectToMySQL('users').query_db(query, data)
        return results

    @classmethod
    def delete_by_id(cls, id):
        query = "DELETE FROM users WHERE id = %(id)s;"
        data = {
            'id': id
        }
        connectToMySQL('users').query_db(query, data)


    @classmethod
    def update(cls, id, fname, lname, email):
        query = "UPDATE users SET first_name = %(fname)s, last_name = %(fname)s, email = %(email)s, updated_at = NOW() WHERE id=%(id)s;"
        data = {
            'id': id,
            'fname': fname,
            'lname': lname,
            'email': email
        }
        connectToMySQL('users').query_db(query, data)
        


