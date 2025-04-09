# Dictionary Key Access
def access_dict_key():
    my_dict = {'name': 'Alice', 'age': 30}
    key = input("Enter a key to access (e.g., name, age): ")
    try:
        print(f"The value for '{key}' is {my_dict[key]}")
    except KeyError:
        print(f"Error: Key '{key}' does not exist in the dictionary.")