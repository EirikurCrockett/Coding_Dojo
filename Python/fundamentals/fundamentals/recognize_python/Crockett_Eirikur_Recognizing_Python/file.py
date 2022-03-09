num1 = 42 #variable declaration: initialize numbers
num2 = 2.3 #variable declaration: initialize numbers
boolean = True #variable declaration: initialize boolean
string = 'Hello World' #variable declaration: initialize string
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] #variable declaration: initialize list
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} #variable declaration: initialize dictionary
fruit = ('blueberry', 'strawberry', 'banana') #variable declaration: initialize tuple
print(type(fruit)) #log statement: object type of fruit, 'tuple'
print(pizza_toppings[1]) #log statement: value at index 1, [1], of list pizza_toppings 'Sausage
pizza_toppings.append('Mushrooms') #add value: 'Mushrooms' added to list pizza_toppings
print(person['name']) #log statement: value of 'name' within person, 'John'
person['name'] = 'George' #change value: value of 'name' changed from 'John' to 'George'
person['eye_color'] = 'blue' #add value: value 'eye_color' added to person with value of 'blue'
print(fruit[2]) #log statement: value at index 2, [2], in person, 'banana'

if num1 > 45: #conitional: if, num1 > 45 = false
    print("It's greater") #log statement: "It's greater"
else: #conditional; else
    print("It's lower") #log statement: "It's lower"

if len(string) < 5: #conditional: if, len(string) = 11, 11 < 5 = false
    print("It's a short word!") #log statement: "It's a short word!"
elif len(string) > 15: #conditional: else if, len(string) = 11, 11 > 15 = false
    print("It's a long word!") #log statement: "It's a long word!"
else:#conditional: else
    print("Just right!")#log statement: "Just right!"

for x in range(5): #for loop: start default, 0, stop 5, step default, 1
    print(x) #log statement: 0,1,2,3,4; the stop value is not included

for x in range(2,5): #for loop: start 2, stop 5, steop default, 1
    print(x) #log statement: 2,3,4; the stop value is not incldued

for x in range(2,10,3): #for loop: start 2 stop 10, step 3
    print(x) #log statement: 2,5,8; we start at 2 and increment by 3 until we hit at least 10(exclusive)

x = 0 #variable decloration: initialize number
while(x < 5):#while loop: start x = 0; stop x < 5
    print(x) #log statement: 0,1,2,3,4; x=5 breaks our condition and ends the loop without running
    x += 1 #increment: x = x + 1

pizza_toppings.pop()
"""
    delete value: deletes the value of the last index of our list pizza_toppings
    by default pop() when given no arguments targets the value held in the last index of the given list
"""
pizza_toppings.pop(1) #delete value: deletes the value at index 1, [1], in list pizza_toppings

print(person)
"""
    log statement; prints the data held within the dictionary formated like {'key':value, 'key':value}
    {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False, 'eye_color':'blue}
"""
person.pop('eye_color')
print(person) #log statement: {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}

for topping in pizza_toppings:#for loop: loops through the values in list pizza_toppings; 'Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'
    if topping == 'Pepperoni': #conditional: if; checks if topping is equal to 'Pepperoni'
        continue #for loop: continue; tells computer to continue the for loop logic
    print('After 1st if statement') #log statement: 'After 1st if statement'
    if topping == 'Olives': #conditional: if; checks if topping is equal to 'Olives'
        break #for loop: break; tells computer to end for loop logic

def print_hello_ten_times(): #function; parameter: none
    for num in range(10): #for loop; start 0, stop 10; step 1
        print('Hello') #log statement, 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello'

print_hello_ten_times() #function call

def print_hello_x_times(x): #function; arguement: x
    for num in range(x): #for loop: start 0, stop x, step, 1
        print('Hello') #log statement: log hello, x times

print_hello_x_times(4) #function call; 'hello', 'hello', 'hello', 'hello'

def print_hello_x_or_ten_times(x = 10): #function; parameter: x, default 10 if no arguemtn was passed
    for num in range(x): #for loop, start 1, stop 10 or x, step 1
        print('Hello') #log statement: print 'hello', x or 10 times

print_hello_x_or_ten_times() #function call, 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello'
print_hello_x_or_ten_times(4) #function call, 'hello', 'hello', 'hello', 'hello'


"""
Bonus section
"""

# print(num3) nameError: name <num3> is not defiend
# num3 = 72 
# fruit[0] = 'cranberry' typeError: 'tuple' object does not support item assignment
# print(person['favorite_team']) keyError: 'favorite_team
# print(pizza_toppings[7]) indexError: list index out of range
#   print(boolean) indentationError: unexpected indent
# fruit.append('raspberry') attributeError: 'tuple' object has no attribute 'append'
# fruit.pop(1)attributeError: 'tuple' object has no attribute 'pop'