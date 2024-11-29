import random

# my_num ცვლადს მიანიჭეთ შემთხვევითი რიცხვი 1-დან 10-მდე
my_num = random.randint(1, 10)

# ცდების რაოდენობის ცვლადი
attempts = 0

# while loop, რომელიც გრძელდება სანამ მომხმარებელი არ გამოიცნობს სწორ რიცხვს
while True:
    user_guess = int(input("დაასწარი რიცხვი (1-დან 10-მდე): "))
    attempts += 1  # ყოველი მცდელობისთვის, გავზრდით attempts-ს
    
    # თუ მომხმარებელმა შეიცნო სწორი რიცხვი
    if user_guess == my_num:
        print(f"You guessed the correct number in {attempts} attempts!")
        break  # როდესაც რიცხვი სწორია, loop-ი დასრულდება
