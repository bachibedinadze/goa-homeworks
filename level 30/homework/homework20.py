def is_all_lowercase(input_string):
    """
    Checks if all characters in the given string are lowercase.

    Args:
        input_string (str): The string to check.

    Returns:
        bool: True if all characters are lowercase, otherwise False.
    """
    return input_string.islower()

# Example usage
input_string = input("Enter a string: ")

# Call the function and print the result
if is_all_lowercase(input_string):
    print("The string is completely in lowercase.")
else:
    print("The string is not completely in lowercase.")