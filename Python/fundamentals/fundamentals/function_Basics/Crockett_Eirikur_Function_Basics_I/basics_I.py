"""
For each of the following code snippets, first predict the output (what you will see printed to the terminal). 
Once you've made a prediction, run the code snippet to see if you are correct!
"""

#1
def number_of_food_groups():
    return 5
print(number_of_food_groups())
#logs 5 to console
#result: 5

#2
def number_of_military_branches():
    return 5
print(number_of_days_in_a_week_silicon_or_triangle_sides() + number_of_military_branches())
#we have not defined number_of_days_in_a_week_silicon_or_triangle_sides() so this should throw an error
#result: NameError: name 'number_of_days_in_a_week_silicon_or_triangle_sides' is not defined

#3
def number_of_books_on_hold():
    return 5
    return 10
print(number_of_books_on_hold())
#logs 5 to console since once we hit line 22 and return 5 the code body of the function ends and we wont reach line 23
#result: 5

#4
def number_of_fingers():
    return 5
    print(10)
print(number_of_fingers())
#logs 5 to console since once we hit line 30 and return 5 the code body of the function ends and we wont reach line 31
#result: 5

#5
def number_of_great_lakes():
    print(5)
x = number_of_great_lakes()
print(x)
"""
logs 5 to console then throws an undefined error due to setting a variable to the value of a function without a return
code should break with the error and not reach line 40
"""
#result: 5, None; it did not throw an error

#6
def add(b,c):
    print(b+c)
print(add(1,2) + add(2,3))
"""
add(1,2) logs 3 to console
add(2,3) logs 5 to console
logs NoneNone to console, not sure if the None from #5 was a string or not. may jsut print a single None
"""
#Result: 3, 5, TypeError: unsupported operand type(s) for +: 'NoneType' and 'NoneType'

#7
def concatenate(b,c):
    return str(b)+str(c)
    print(concatenate(2,5))
#nothing will happen since we dont have a function call
#Result: nothing happened

#8
def number_of_oceans_or_fingers_or_continents():
    b = 100
    print(b)#logs 100 to console
    if b < 10:#false
        return 5
    else:
        return 10#returns 10
    return 7
print(number_of_oceans_or_fingers_or_continents())#function call: logs 10 to console
#Result: 100, 10



#9
def number_of_days_in_a_week_silicon_or_triangle_sides(b,c):
    if b<c:
        #First (2,3): 2<3 true
        #Second (5,3): 5<3 false
        #Third (2,3): 2<3 true
        #Fouth (5,3): 5<3 false
        return 7 #First and Third return 7
    else:
        return 14 #Second and Fourth return 14
    return 3
print(number_of_days_in_a_week_silicon_or_triangle_sides(2,3))#First Call: Logs 7 to console
print(number_of_days_in_a_week_silicon_or_triangle_sides(5,3))#Second Call: Logs 14 to console
print(number_of_days_in_a_week_silicon_or_triangle_sides(2,3) + number_of_days_in_a_week_silicon_or_triangle_sides(5,3))#Third and Fourth Call: logs 7 + 14, which is 21
#Result: 7, 14, 21

#10
def addition(b,c):
    return b+c # 3+5 = 8, Returns 8
    return 10
print(addition(3,5)) #Logs 8 to console
#Result: 8


#11
b = 500
print(b) #Logs 500
def foobar():
    b = 300 #b defined within function does not affect b defined outside of function 
    print(b) #Logs 300 when called
print(b) #Logs 500
foobar() #Logs 300
print(b) #Logs 500
#Result: 500, 500, 300, 500

#12
b = 500
print(b) #Logs 500
def foobar():
    b = 300 #b defined within function does not affect b defined outside of function
    print(b) #Logs 300 when called
    return b #Returns value of 300 not the whole variable
print(b) #Logs 500
foobar()#Logs 300
print(b) #Logs 500
#Result:500, 500, 300, 500



#13
b = 500
print(b) #Logs 500
def foobar():
    b = 300
    print(b) #Logs 300 when called
    return b #Returns 300
print(b) #Logs 500
b=foobar() #Logs 300, b = 300
print(b) #Logs 300
#Result: 500, 500, 300, 300

#14
def foo():
    print(1)#logs 1 when called
    bar() # logs 3  from bar
    print(2) #logs 2 when called
def bar():
    print(3) #logs 3 when called
foo() # logs 1, 3, 2 from calling foo which also calls bar within it
#result: 1, 3, 2

#15
def foo():
    print(1) #logs 1 when called
    x = bar() # logs 3 from bar; x = 5
    print(x) # logs 5 when called
    return 10 #returns 10
def bar():
    print(3) #logs 3 when called
    return 5 #return 10
y = foo() #logs 1, 3, 5, y = 10
print(y) #logs 10
#Result: 1, 3, 5, 10

