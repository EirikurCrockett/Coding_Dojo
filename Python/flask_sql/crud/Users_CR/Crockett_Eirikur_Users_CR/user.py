from mysqlconnection import connectToMySQL

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

