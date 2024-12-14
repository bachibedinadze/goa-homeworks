# მომხმარებლისგან სამი რიცხვის მიღება
num1 = float(input("შეიტანეთ პირველი რიცხვი: "))
num2 = float(input("შეიტანეთ მეორე რიცხვი: "))
num3 = float(input("შეიტანეთ მესამე რიცხვი: "))

# გამოსახავდით ყველაზე დიდ რიცხვს
if num1 >= num2 and num1 >= num3:
    print(f"ყველაზე დიდი რიცხვია: {num1}")
elif num2 >= num1 and num2 >= num3:
    print(f"ყველაზე დიდი რიცხვია: {num2}")
else:
    print(f"ყველაზე დიდი რიცხვია: {num3}")