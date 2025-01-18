# მომხმარებლის სახელი შემოატანინეთ
name = input("შეიყვანეთ თქვენი სახელი: ")

# მომხმარებლის არჩევანი შემოატანინეთ
choice = input("აირჩიეთ 'u' (uppercase) ან 'l' (lowercase): ")

# თუ choice არის 'u', გამოიტანეთ სახელი uppercase-ში
if choice == "u":
    print(name.upper())
# თუ choice არის 'l', გამოიტანეთ სახელი lowercase-ში
elif choice == "l":
    print(name.lower())
# თუ არცერთი არ არის, გამოსახეთ "wrong information"
else:
    print("wrong information")