import random

# 1-დან 100-მდე რიცხვის გენერაცია
secret_number = random.randint(1, 100)

# მომხმარებლის რიცხვის შეყვანა
user_input = int(input("შეიყვანე რიცხვი 1-დან 100-მდე: "))

# შედარება
if user_input > secret_number:
    print("შენი რიცხვი მეტია")
elif user_input < secret_number:
    print("შენი რიცხვი ნაკლებია")
else:
    print("გილოცავ! სწორად გამოიცანი 🎉")