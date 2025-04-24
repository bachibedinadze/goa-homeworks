mixed_numbers = [1, 2, 3, 4, 5, 10, 12, 15, 20, 30, 50, 55]
words = ['apple', 'banana', 'cherry', '', 'fig', 'grape']
names_list = ['Alice', 'Bob', 'Andrew', 'Charlie', 'Ann']
mixed_list = [1, -2, 3, 0, -5, 10, None, 45, 60, None]

# 17) Keep only even numbers
even_numbers = list(filter(lambda x: x % 2 == 0, mixed_numbers))

# 18) Numbers greater than 10
greater_than_10 = list(filter(lambda x: x > 10, mixed_numbers))

# 19) Strings longer than 5 characters
long_words = list(filter(lambda s: len(s) > 5, words))

# 20) Remove empty strings
non_empty_strings = list(filter(lambda s: s != '', words))

# 21) Only positive numbers
positive_numbers = list(filter(lambda x: x > 0, mixed_list))

# 22) Names starting with 'A'
names_starting_with_a = list(filter(lambda name: name.startswith('A'), names_list))

# 23) Numbers divisible by 3
divisible_by_3 = list(filter(lambda x: x % 3 == 0, mixed_numbers))

# 24) Words containing 'e'
words_with_e = list(filter(lambda word: 'e' in word, words))

# 25) Remove None values
without_none = list(filter(lambda x: x is not None, mixed_list))

# 26) Numbers <= 50
less_or_equal_50 = list(filter(lambda x: x <= 50, mixed_numbers))