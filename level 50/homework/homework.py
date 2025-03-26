# 1) Prompt the user to enter a number
try:
    user_input = input("Enter a number: ")
    number = float(user_input)
    print(f"You entered: {number}")
except ValueError:
    print("Error: Invalid input! Please enter a valid number.")