def capitalize_first_letter(input_string):
    """
    Capitalizes the first letter of a string.

    Args:
        input_string (str): The string to be capitalized.

    Returns:
        str: The string with the first letter capitalized.
    """
    return input_string.capitalize()

# Example usage
text = "hello world"
capitalized_text = capitalize_first_letter(text)
print("Capitalized String:", capitalized_text)