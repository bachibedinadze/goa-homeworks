# 2) Function Basics
def hello_world():
    print("Hello, World!")

# 3) Arguments and Parameters
def add_numbers(a, b):
    print(a + b)

# 4) Return Statement
def multiply_by_ten(n):
    return n * 10

# 5) Default Arguments
def greet(name="Guest"):
    print(f"Hello, {name}!")

# 6) Boss Level: Nested Functions
def outer_function():
    def inner_function():
        print("This is the inner function")
    inner_function()

# 7) Even or Odd
def check_even_odd(numbers):
    for num in numbers:
        if num % 2 == 0:
            print(f"{num} is Even")
        else:
            print(f"{num} is Odd")

# 8) Find the Maximum
def find_maximum(numbers):
    max_num = numbers[0]
    for num in numbers:
        if num > max_num:
            max_num = num
    return max_num

# 9) Filter Positive Numbers
def filter_positive(numbers):
    positive_numbers = []
    for num in numbers:
        if num > 0:
            positive_numbers.append(num)
    return positive_numbers

# 10) Sum of Numbers Divisible by 3
def sum_divisible_by_three():
    total = 0
    for num in range(1, 101):
        if num % 3 == 0:
            total += num
    return total
