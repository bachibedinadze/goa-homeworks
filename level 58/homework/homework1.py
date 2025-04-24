numbers = [1, 2, 3, 4, 5]
names = ['alice', 'bob', 'anna']
temps_c = [0, 20, 37, 100]

# 7) Add 10 to every number
add_10 = list(map(lambda x: x + 10, numbers))

# 8) Convert strings to uppercase
to_upper = list(map(lambda s: s.upper(), names))

# 9) Length of each word
word_lengths = list(map(lambda s: len(s), names))

# 10) Square each number
squares = list(map(lambda x: x**2, numbers))

# 11) Convert integers to strings
int_to_str = list(map(str, numbers))

# 12) Concatenate "Hello " to each name
greetings = list(map(lambda name: "Hello " + name, names))

# 13) Subtract 5 from each element
subtract_5 = list(map(lambda x: x - 5, numbers))

# 14) Multiply each number by 3
multiply_by_3 = list(map(lambda x: x * 3, numbers))

# 15) Celsius to Fahrenheit
converted_temps = list(map(lambda c: (c * 9/5) + 32, temps_c))

# 16) Check if numbers are greater than 50
greater_than_50 = list(map(lambda x: x > 50, [10, 55, 60, 30]))
mixed_numbers = [1, 2, 3, 4, 5, 10, 12, 15, 20, 30, 50, 55]
words = ['apple', 'banana', 'cherry', '', 'fig', 'grape']
names_list = ['Alice', 'Bob', 'Andrew', 'Charlie', 'Ann']
mixed_list = [1, -2, 3, 0, -5, 10, None, 45, 60, None]