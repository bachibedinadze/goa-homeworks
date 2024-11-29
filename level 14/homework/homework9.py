# მომხმარებლისგან რიცხვების მიღება
num1 = int(input("შეიყვანეთ პირველი რიცხვი (num1): "))
num2 = int(input("შეიყვანეთ მეორე რიცხვი (num2): "))
num3 = int(input("შეიყვანეთ მესამე რიცხვი (num3): "))

# შექმნათ დიაპაზონი range(num1, num2, num3)
for num in range(num1, num2, num3):
    print(num ** 2)  # დაბეჭდეთ ცვლადის კვადრატი