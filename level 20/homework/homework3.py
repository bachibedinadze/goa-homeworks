# მიიღეთ მომხმარებლისგან ორი რიცხვი
start = int(input("შეიტანეთ პირველი რიცხვი: "))
end = int(input("შეიტანეთ მეორე რიცხვი: "))

# ვთხოვთ მომხმარებელს იმის გარკვევას, თუ რომელი რიცხვი არის დიდი
if start > end:
    start, end = end, start  # ვცვლით რიცხვებს ადგილებით, რომ პირველი რიცხვი იყოს ნაკლები

# განვსაზღვროთ ჯამი
total_sum = 0

# გამოიყენეთ ლუპი, რომ დავამატოთ რიცხვები
for number in range(start, end + 1):  # +1 იმიტომ, რომ range არ მოიცავს ბოლო რიცხვს
    total_sum += number

# დაბეჭდეთ შედეგი
print(f"რიცხვების {start} და {end} შორის ჯამი არის: {total_sum}")