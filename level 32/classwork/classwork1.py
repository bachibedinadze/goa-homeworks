def generate_big_sentence(name, surname, age):
    sentence = f"My name is {name} {surname}, and I am {age} years old."
    return sentence

# მომხმარებლისგან მონაცემების მიღება
name = input("Enter your first name: ")
surname = input("Enter your last name: ")
age = input("Enter your age: ")

# ფუნქციის გამოძახება და შედეგის დაბეჭდვა
result = generate_big_sentence(name, surname, age)
print(result)