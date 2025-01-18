# Prompt the user for a string
user_string = input("Enter a string: ")

# Check if the string contains only lowercase letters
if user_string.islower() and user_string.isalpha():
    print("The string contains only lowercase letters.")
else:
    print("The string does not contain only lowercase letters.")