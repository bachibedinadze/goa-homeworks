# განსაზღვრეთ სწორი პაროლი
correct_password = "my_secure_password"

# პაროლის შეყვანის მცდელობების რიცხვი
attempts = 0

# while loop, რომელიც გაგრძელდება, სანამ მომხმარებლის პაროლი არ შეესაბამება სწორ პაროლს
while True:
    user_password = input("გთხოვთ, შეიყვანოთ პაროლი: ")
    attempts += 1  # ყოველი მცდელობისთვის, გავზრდით attempts-ს
    
    # პაროლის შემოწმება
    if user_password == correct_password:
        print("Access granted")
        print(f"პაროლი წარმატებით შეყვანილია {attempts} ცდაში.")
        break  # როდესაც პაროლი სწორია, loop-ი დასრულდება
