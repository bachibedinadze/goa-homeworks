# Correct password
correct_password = "secret123"

# Prompt the user to enter the password
user_input = input("Enter your password: ")

# Keep asking until the entered password is correct
while user_input != correct_password:
    print("Incorrect password. Please try again.")
    user_input = input("Enter your password: ")

# When the correct password is entered
print("Access granted!")
