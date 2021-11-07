# A List is a collection which is ordered and changeable. Allows duplicate members.

# Create List
numbers = [1,2,3,4,5]
fruits = ['Apple', 'Oranges', 'Grapes', 'Pears']

# Use a constructor
# numbers2 = list((1,2,3,4,5))

# Get a value
print(fruits[1])

# Get length
print(len(fruits))

# Append to list
fruits.append('Mangos')

# Remove from list
fruits.remove('Grapes')

# Insert into position
fruits.insert(2,'Strawberries')

# Change value
fruits[0] = 'Blueberries'

# Remove with Pop
fruits.pop(2)

# Reverse list
fruits.reverse()

# Sort List
fruits.sort()

# Reverse sort
fruits.sort(reverse=True)

print(fruits)