def is_all_uppercase(input_string):
    """
    Checks if all characters in the given string are uppercase.

    Args:
        input_string (str): The string to check.

    Returns:
        bool: True if all characters are uppercase, otherwise False.
    """
    return input_string.isupper()

# Example usage
input_string = input("Enter a string: ")

# Call the function and print the result
if is_all_uppercase(input_string):
    print("The string consists entirely of uppercase letters.")
else:
    print("The string does not consist entirely of uppercase letters.")