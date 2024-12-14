# Taking user input
num = float(input("Enter a number: "))

# Checking if the number is positive, negative, or zero
if num > 0:
    print(f"The number {num} is positive.")
elif num < 0:
    print(f"The number {num} is negative.")
else:
    print("The number is zero.")