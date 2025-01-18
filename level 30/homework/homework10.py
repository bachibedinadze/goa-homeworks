# Ask the user for a string and a substring
main_string = input("Enter the main string: ")
substring = input("Enter the substring to search for: ")

# Find the position of the first occurrence of the substring
position = main_string.find(substring)

# Print the result
if position != -1:
    print(f'The substring "{substring}" first occurs at index: {position}')
else:
    print(f'The substring "{substring}" was not found in the string.')