class BankAccount:
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate = 0.05, balance = 200):

        # your code here! (remember, instance attributes go here)
        # don't worry about user info here; we'll involve the User class soon
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        # your code here
        self.balance += amount
        return self

    def withdraw(self, amount):
        # your code here
        self.balance -= amount
        return self

    def display_account_info(self):
        # your code here
        print(self.balance)
        return self

    def yield_interest(self):
        # your code here
        self.balance *= (1+self.int_rate)

john = BankAccount(0.06, 300)
jack = BankAccount()

john.deposit(30).deposit(80).deposit(25).withdraw(133).yield_interest().display_account_info()
jack.deposit(50).deposit(62).withdraw(25).withdraw(18).withdraw(60).withdraw(5).yield_interest().display_account_info()

