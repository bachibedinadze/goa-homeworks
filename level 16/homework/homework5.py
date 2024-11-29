# Correct username and password
correct_username = "user123"
correct_password = "secret123"

# Prompt the user to enter both username and password
username = input("Enter your username: ")
password = input("Enter your password: ")

# Keep asking until both username and password are correct
while username != correct_username or password != correct_password:
    print("Incorrect username or password. Please try again.")
    username = input("Enter your username: ")
    password = input("Enter your password: ")

# When both are correct
print("Access granted!")
