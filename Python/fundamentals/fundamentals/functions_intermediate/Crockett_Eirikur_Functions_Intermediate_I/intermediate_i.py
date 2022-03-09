"""
1 Update Values in Dictionaries and Lists

    Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].
    Change the last_name of the first student from 'Jordan' to 'Bryant'
    In the sports_directory, change 'Messi' to 'Andres'
    Change the value 20 in z to 30
"""


x = [ [5,2,3], [10,8,9] ] 
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

def update_x():
    for i in x:
        for j in i:
            if(j==10):
                j = 15

def update_students():
    for i in students:
        if(i['last_name'] == 'Jordan'):
            i['last_name'] = 'Bryant'

def update_sports():
    for i in sports_directory:
        for j in sports_directory[i]:
            if j == 'Messi':
                j = 'Andres'

def update_z():
    for i in z:
        for j in i:
            if(i[j] == 20):
                i[j] = 30

print(x)
update_x()
print(x)

print(students)
update_students()
print(students)

print(sports_directory)
update_sports()
print(sports_directory)

print(z)
update_z()
print(z)


"""
2 Iterate Through a List of Dictionaries

Create a function iterateDictionary(some_list) that, given a list of dictionaries, 
the function loops through each dictionary in the list and prints each key and the associated value. 

"""

students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'},
    {'first_name' : 'Mark', 'last_name' : 'Guillen'},
    {'first_name' : 'KB', 'last_name' : 'Tonel'}
]
def iterateDictionary(students):
    
    for i in students:
        temp = ""
        count = 1
        for j in i:
            if(count > 1):
                temp = temp + ", "
            count+=1
            key = j
            value = i[j] 
            temp = temp + "{} - {}".format(key, value)
        print(temp)
    

iterateDictionary(students)


# should output: (it's okay if each key-value pair ends up on 2 separate lines;
# bonus to get them to appear exactly as below!)
# first_name - Michael, last_name - Jordan
# first_name - John, last_name - Rosales
# first_name - Mark, last_name - Guillen
# first_name - KB, last_name - Tonel

"""
3 Get Values From a List of Dictionaries

Create a function iterateDictionary2(key_name, some_list) that, given a list of dictionaries and a key name, 
the function prints the value stored in that key for each dictionary.
"""
def iterateDictionary2(key_name, some_list):
    for i in some_list:
        print(i[key_name])

iterateDictionary2('first_name', students)
iterateDictionary2('last_name', students)

"""
4 Iterate Through a Dictionary with List Values

Create a function printInfo(some_dict) that given a dictionary whose values are all lists, 
prints the name of each key along with the size of its list, and then prints the associated 
values within each key's list.
"""

dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

def printInfo(some_dict):
    for i in some_dict:
        print('{} {}'.format(len(some_dict[i]), i))
        for j in some_dict[i]:
            print(j)

printInfo(dojo)


