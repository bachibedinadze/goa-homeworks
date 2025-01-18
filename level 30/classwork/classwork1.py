def manual_find(main_string, str_to_find):
    """
    მოძებნის str_to_find-ი main_string-ში და გამოიტანს მისი პირველი შესაბამისობის ინდექსს.

    თუ str_to_find არ მოიპოვება, დაუბეჭდავს -1.
    """
    # მოვიყვანთ ყველა სიმბოლოს ინდექსში
    index = main_string.find(str_to_find)
    
    if index != -1:
        print(f"'{str_to_find}' არის '{main_string}'-ში, {index}-ში ინდექსზე.")
    else:
        print("-1")

# მაგალითი
main_string = "Hello, world!"
str_to_find = "world"
manual_find(main_string, str_to_find)

str_to_find = "python"
manual_find(main_string, str_to_find)