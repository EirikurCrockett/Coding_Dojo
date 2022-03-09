"""
For this assignment, we'll add some functionality to the User class:

    make_withdrawal(self, amount) - have this method decrease the user's balance by the amount specified

    display_user_balance(self) - have this method print the user's name and account balance to the terminal
        eg. "User: Guido van Rossum, Balance: $150

    BONUS: transfer_money(self, other_user, amount) - have this method decrease the user's balance by the amount and add that amount to other other_user's balance

"""

class User:		# here's what we have so far
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0
    # adding the deposit method
    def make_deposit(self, amount):	# takes an argument that is the amount of the deposit
        self.account_balance += amount	# the specific user's account increases by the amount of the value received

    def make_withdrawal(self, amount):
        self.account_balance -= amount

    def display_user_balance(self):
        print("User: {} has a balance of ${}".format(self.name, self.account_balance))


    def transfer_money(self, other_user, amount):
        self.account_balance-=amount
        other_user.make_deposit(amount)


john = User("John Doe", 'johnd@mail.com')
jane = User("Jane Doe", 'janed@mail.com')
jack = User("Jack Doe", 'jackd@mail.com')

john.make_deposit(100)
john.make_deposit(59)
john.make_deposit(842)
john.make_withdrawal(650)
john.display_user_balance()

jane.make_deposit(12)
jane.make_deposit(798)
jane.make_withdrawal(400)
jane.make_withdrawal(32)
jane.display_user_balance()

jack.make_deposit(1257)
jack.make_withdrawal(375)
jack.make_withdrawal(219)
jack.make_withdrawal(27)
jack.display_user_balance()

john.transfer_money(jack, 100)

john.display_user_balance()
jack.display_user_balance()

