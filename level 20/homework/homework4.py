# მიიღეთ მომხმარებლისგან რიცხვი
num = int(input("შეიტანეთ რიცხვი: "))

# შესამოწმებელი პირობა: რიცხვი უნდა იყოს 1-ზე დიდი და არ იყოფოდეს სხვაგვარად, გარდა 1-ისა და საკუთარი რიცხვისა
if num > 1:
    # თუ რიცხვი უფრო დიდია 1-ზე, შევამოწმებთ, არის თუ არა პირველადი
    for i in range(2, int(num ** 0.5) + 1):  # შევამოწმებთ მხოლოდ რიცხვებს 2 დან num-ის განზომილებამდე
        if num % i == 0:
            print(f"{num} არ არის პირველადი რიცხვი.")
            break
    else:
        print(f"{num} არის პირველადი რიცხვი.")
else:
    print(f"{num} არ არის პირველადი რიცხვი.")