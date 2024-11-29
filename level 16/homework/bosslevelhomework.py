def factorial(n):
    result = 1
    while n > 1:
        result *= n
        n -= 1
    return result


num = int(input("Enter a number: "))
print(f"The factorial of {num} is {factorial(num)}.")