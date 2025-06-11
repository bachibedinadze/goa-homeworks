# 1. სია რიცხვებით
numbers = [1, 2, 3, 4, 5]
print("Numbers length:", len(numbers))            # Length: 5
print("Numbers concat:", numbers + [6, 7])        # [1, 2, 3, 4, 5, 6, 7]

# 2. სია სტრინგებით
names = ["Ana", "Luka", "Nika"]
print("Names length:", len(names))                # Length: 3
print("Names concat:", names + ["Giorgi"])        # ["Ana", "Luka", "Nika", "Giorgi"]

# 3. შერეული სია
mixed = [1, "Hello", 3.14, True]
print("Mixed length:", len(mixed))                # Length: 4
print("Mixed concat:", mixed + ["New", 10])       # [1, "Hello", 3.14, True, "New", 10]

# 4. ცარიელი სია
empty = []
print("Empty length:", len(empty))                # Length: 0
print("Empty concat:", empty + [1, 2])            # [1, 2]

# განსხვავებები:
print("\n📌 განსხვავებები სიებს შორის:")
print("Numbers - მხოლოდ რიცხვები")
print("Names - მხოლოდ ტექსტები (სტრინგები)")
print("Mixed - სხვადასხვა ტიპის მონაცემები (int, str, float, bool)")
print("Empty - ცარიელი სია, რომელშიც შეიძლება მოგვიანებით დაემატოს მონაცემები")
