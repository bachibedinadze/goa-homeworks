# სია 10 ელემენტით
my_list = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

# მომხმარებლისგან ორი რიცხვის შეყვანა
num1 = int(input("შეიყვანეთ პირველი მთელი რიცხვი (num1): "))
num2 = int(input("შეიყვანეთ მეორე მთელი რიცხვი (num2): "))

# თუ num1 მეტია num2-ზე
if num1 > num2:
    sliced_list = my_list[num1:num2]  # slicing num1 ინდექსიდან num2 ინდექსამდე
    print(f"ახალი სია: {sliced_list}")

# თუ num2 მეტია num1-ზე
elif num2 > num1:
    sliced_list = my_list[num2:num1]  # slicing num2 ინდექსიდან num1 ინდექსამდე
    print(f"ახალი სია: {sliced_list}")

# თუ num1 და num2 ტოლია
else:
    print("ცარიელი სია: []")