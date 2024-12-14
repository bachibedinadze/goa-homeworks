# Loop to ask the user for 5 numbers
for i in range(5):
    # Taking user input
    num = int(input(f"Enter number {i + 1}: "))

    # Checking if the number is even or odd
    if num % 2 == 0:
        print(f"The number {num} is even.")
    else:
        print(f"The number {num} is odd.")