print("ან ოპერატორი")
print(True or True) #True
print(True or False) #True
print(False or False) #True
print(False or False) #False

print("და ოპერატორი")
print(True and True) #True
print(True and False) #False
print(False and False) #False
print(False and False) #False


# პირველ რიცხვზე ინფუთი
first_number = int(input("გთხოვთ შეიტანოთ პირველი რიცხვი: "))

# მეორე რიცხვზე ინფუთი
second_number = int(input("გთხოვთ შეიტანოთ მეორე რიცხვი: "))

# გამოვიყენოთ შედარებები
print(first_number > 30 and second_number < 40)  # შეამოწმებს პირობას
