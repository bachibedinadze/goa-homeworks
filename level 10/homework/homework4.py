# მომხმარებლისგან სამი რიცხვის შეყვანა
num1 = float(input("გთხოვთ, შეიყვანოთ პირველი რიცხვი: "))
num2 = float(input("გთხოვთ, შეიყვანოთ მეორე რიცხვი: "))
num3 = float(input("გთხოვთ, შეიყვანოთ მესამე რიცხვი: "))

# ჯამი
sum_result = num1 + num2 + num3

# სხვაობა (პირველი რიცხვის - მეორე და მესამე რიცხვების სხვაობა)
difference = num1 - num2 - num3

# ნამრავლი
product = num1 * num2 * num3

# განაყოფი (პირველი რიცხვის / მეორე და მესამე რიცხვების ნამრავლი)
if num2 != 0 and num3 != 0:
    quotient = num1 / (num2 * num3)
else:
    quotient = "Cannot divide by zero"  # თუ მეორე ან მესამე რიცხვი არის 0

# შედეგების დაბეჭდვა
print(f"ჯამი: {sum_result}")
print(f"სხვაობა: {difference}")
print(f"ნამრავლი: {product}")
print(f"განაყოფი: {quotient}")
112