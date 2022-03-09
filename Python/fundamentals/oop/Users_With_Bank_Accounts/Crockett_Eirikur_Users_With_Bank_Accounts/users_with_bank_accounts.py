from curses.ascii import US


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

    def withdraw(self, amount):
        # your code here
        self.balance -= amount

    def display_account_info(self, name):
        # your code here
        print("User: {} has a balance of ${}".format(name, self.balance))
        return self

    def yield_interest(self):
        # your code here
        self.balance *= (1+self.int_rate)


class User:

    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount()

    # adding the deposit method
    def make_deposit(self, amount):
        self.account.deposit(amount)
        return self

    def make_withdrawal(self, amount):
        self.account.withdraw(amount)
        return self

    def display_user_balance(self):
        self.account.display_account_info(self.name)
        return self


    def transfer_money(self, other_user, amount):
        self.make_withdrawal(amount)
        other_user.make_deposit(amount)
        return self

john = User("john doe", 'jdoe@mail.com')
john.display_user_balance().make_deposit(508).make_withdrawal(347).make_deposit(161).make_withdrawal(489).display_user_balance()

jack = User('jack doe', 'jackd@mail.com')

jack.make_deposit(2000).transfer_money(john, 800).display_user_balance()
john.display_user_balance()