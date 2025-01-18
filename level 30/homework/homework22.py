# Prompt the user for a string
user_string = input("Enter a string: ")

# Check if all characters in the string are uppercase
if user_string.isupper():
    print("All characters in the string are uppercase.")
else:
    print("Not all characters in the string are uppercase.")