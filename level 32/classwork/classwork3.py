def my_split(main_string, string_to_split):
    # main_string-ის გაყოფა string_to_split-ის მიხედვით
    result = main_string.split(string_to_split)
    print(result)

# მომხმარებლისგან მონაცემების მიღება
main_string = input("Enter the main string: ")
string_to_split = input("Enter the string to split by: ")

# ფუნქციის გამოძახება
my_split(main_string, string_to_split)