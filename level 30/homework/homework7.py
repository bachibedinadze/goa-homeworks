def capitalize_first_letter(strings_list):
    """
    Capitalizes the first letter of each string in a list.

    Args:
        strings_list (list): A list of lowercase strings.

    Returns:
        list: A new list with each string capitalized.
    """
    return [string.capitalize() for string in strings_list]

# Example usage
lowercase_list = ["apple", "banana", "cherry"]
capitalized_list = capitalize_first_letter(lowercase_list)
print("Capitalized List:", capitalized_list)