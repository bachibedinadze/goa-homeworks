# Dictionary-ის ინიციალიზაცია
person = {
    "name": "Luka",
    "age": 25,
    "city": "Tbilisi",
    "job": "Engineer",
    "hobby": "Reading"
}

# 1. დაბეჭდვა ყველა გასაღების (key) გამოყენებით keys() მეთოდის
print("Keys:", person.keys())

# 2. დაბეჭდვა ყველა მნიშვნელობის (value) გამოყენებით values() მეთოდის
print("Values:", person.values())

# 3. დაბეჭდვა ყველა გასაღები-მნიშვნელობის წყვილის გამოყენებით items() მეთოდის
print("Key-Value Pairs:", person.items())

# 4. Dictionary-ის იტერაცია და თითოეული გასაღები-მნიშვნელობის წყვილის დაბეჭდვა ფორმატირებული სტრიქონით
print("\nFormatted Output:")
for key, value in person.items():
    print(f"{key}: {value}")