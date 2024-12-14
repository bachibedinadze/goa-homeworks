# დაბეჭდეთ 10-დან 30-მდე რიცხვები და მიუწერეთ "even" ან "odd"
for num in range(10, 31):
    if num % 2 == 0:
        print(f"{num} - even")
    else:
        print(f"{num} - odd")