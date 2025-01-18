def convert_list_to_uppercase(strings_list):
    """
    Converts a list of lowercase strings to uppercase.

    Args:
        strings_list (list): A list of strings.

    Returns:
        list: A new list with all strings in uppercase.
    """
    return [string.upper() for string in strings_list]

# Example usage
lowercase_list = ["apple", "banana", "cherry"]
uppercase_list = convert_list_to_uppercase(lowercase_list)
print("Uppercase List:", uppercase_list)