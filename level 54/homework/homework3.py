# Convert String to Integer
def convert_to_integer():
    user_input = input("Enter a number: ")
    try:
        number = int(user_input)
        print(f"You entered the number {number}")
    except ValueError:
        print("Error: That's not a valid integer.")