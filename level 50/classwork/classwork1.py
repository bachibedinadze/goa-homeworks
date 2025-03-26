try:
    user_input = input("შეიყვანეთ თქვენი სახელი: ")
    if not user_input.strip():
        raise ValueError("სახელი არ შეიძლება იყოს ცარიელი!")
    
    print(f"მომხმარებლის შეყვანილი სახელი: {user_input}")

except ValueError as ve:
    print(f"ValueError: {ve}")
except KeyboardInterrupt:
    print("\nშეყვანა შეწყდა მომხმარებლის მიერ.")
except Exception as e:
    print(f"უცნობი შეცდომა: {e}")