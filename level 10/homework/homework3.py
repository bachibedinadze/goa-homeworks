# მომხმარებლისგან ორი რიცხვის შეყვანა
num1 = float(input("გთხოვთ, შეიყვანოთ პირველი რიცხვი: "))
num2 = float(input("გთხოვთ, შეიყვანოთ მეორე რიცხვი: "))

# ჯამი
sum_result = num1 + num2

# სხვაობა
difference = num1 - num2

# ნამრავლი
product = num1 * num2

# განაყოფი
if num2 != 0:  # ვარაუდი რომ მეორე რიცხვი არ არის 0
    quotient = num1 / num2
else:
    quotient = "Cannot divide by zero"  # თუ მეორე რიცხვი არის 0

# პირველი რიცხვის ხარისხად მეორე
if num2 != 0:
    first_over_second = num1 / num2
else:
    first_over_second = "Cannot divide by zero"

# მეორე რიცხვის ხარისხად პირველი
if num1 != 0:
    second_over_first = num2 / num1
else:
    second_over_first = "Cannot divide by zero"

# შედეგების დაბეჭდვა
print(f"ჯამი: {sum_result}")
print(f"სხვაობა: {difference}")
print(f"ნამრავლი: {product}")
print(f"განაყოფი (პირველი / მეორე): {quotient}")
print(f"პირველი რიცხვის ხარისხად მეორე: {first_over_second}")
print(f"მეორე რიცხვის ხარისხად პირველი: {second_over_first}")
112