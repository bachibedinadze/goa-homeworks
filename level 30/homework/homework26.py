def replace_spaces_with_underscores(input_string):
    """
    Replaces all spaces in the given string with underscores.

    Args:
        input_string (str): The string to modify.

    Returns:
        str: The modified string with spaces replaced by underscores.
    """
    return input_string.replace(" ", "_")

# Example usage
input_string = input("Enter a string: ")

# Call the function and print the result
modified_string = replace_spaces_with_underscores(input_string)
print("Modified string:", modified_string)