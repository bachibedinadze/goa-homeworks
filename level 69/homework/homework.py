# 2) Even or Odd
num = int(input("Enter a number: "))
if num % 2 == 0:
    print("Even")
else:
    print("Odd")

# 3) Grade Assignment
score = int(input("Enter your score: "))
if score >= 90:
    print("Grade A")
elif score >= 80:
    print("Grade B")
elif score >= 70:
    print("Grade C")
elif score >= 60:
    print("Grade D")
else:
    print("Fail")

# 4) Largest Among Three Numbers
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))
c = int(input("Enter third number: "))
if a == b == c:
    print("All numbers are equal")
elif a >= b and a >= c:
    print("Largest number is:", a)
elif b >= a and b >= c:
    print("Largest number is:", b)
else:
    print("Largest number is:", c)

# 5) Vowel or Consonant
ch = input("Enter a character: ").lower()
if ch in 'aeiou':
    print("Vowel")
elif ch.isalpha():
    print("Consonant")
else:
    print("Not a valid alphabet")

# 6) Divisibility by 3 and 5
num = int(input("Enter a number: "))
if num % 3 == 0 and num % 5 == 0:
    print("Divisible by both 3 and 5")
elif num % 3 == 0:
    print("Divisible by 3 only")
elif num % 5 == 0:
    print("Divisible by 5 only")
else:
    print("Not divisible by 3 or 5")

# 7) Age Category
age = int(input("Enter your age: "))
if 0 <= age <= 12:
    print("Child")
elif 13 <= age <= 19:
    print("Teenager")
elif 20 <= age <= 59:
    print("Adult")
elif age >= 60:
    print("Senior")
else:
    print("Invalid age")

# 8) Print 1 to 5 (while loop)
i = 1
while i <= 5:
    print(i)
    i += 1

# 9) Even numbers from 2 to 10 (while loop)
i = 2
while i <= 10:
    print(i)
    i += 2

# 10) Print 10 to 1 (while loop)
i = 10
while i >= 1:
    print(i)
    i -= 1

# 11) Print 1 to 10 (for loop)
for i in range(1, 11):
    print(i)

# 12) First 5 multiples of 3
for i in range(1, 6):
    print(3 * i)

# 13) Print 10 to 1 (for loop)
for i in range(10, 0, -1):
    print(i)

# 14) Even numbers between 1 and 20
for i in range(1, 21):
    if i % 2 == 0:
        print(i)

# 15) Sum of numbers from 1 to 5
total = 0
for i in range(1, 6):
    total += i
print("Sum is:", total)