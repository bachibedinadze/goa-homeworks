def generate_big_sentence(name, surname, age):
    sentence = "My name is {} {}, and I am {} years old.".format(name, surname, age)
    return sentence

# მომხმარებლისგან მონაცემების მიღება
name = input("Enter your first name: ")
surname = input("Enter your last name: ")
age = input("Enter your age: ")

# ფუნქციის გამოძახება და შედეგის დაბეჭდვა
result = generate_big_sentence(name, surname, age)
print(result)