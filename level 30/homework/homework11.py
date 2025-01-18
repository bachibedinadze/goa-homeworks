def find_character_index(input_string, character):
    """
    Finds and returns the index of the first occurrence of a specified character in a string.

    Args:
        input_string (str): The string to search within.
        character (str): The character to find.

    Returns:
        int: The index of the first occurrence of the character, or -1 if not found.
    """
    return input_string.find(character)

# Example usage
string = "Hello, World!"
char = "o"
index = find_character_index(string, char)

if index != -1:
    print(f'The character "{char}" first occurs at index: {index}')
else:
    print(f'The character "{char}" was not found in the string.')