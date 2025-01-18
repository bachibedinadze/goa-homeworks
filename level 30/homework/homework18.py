def find_character_index_in_string(input_string, character):
    """
    Returns the index of the first occurrence of a specified character in a string.

    Args:
        input_string (str): The string to search within.
        character (str): The character to find.

    Returns:
        int: The index of the first occurrence of the character, or -1 if not found.
    """
    # Find the index of the first occurrence of the character
    return input_string.find(character)

# Example usage
input_string = input("Enter a string: ")
character = input("Enter a character to find: ")

index = find_character_index_in_string(input_string, character)

if index != -1:
    print(f"The character '{character}' first occurs at index: {index}")
else:
    print(f"The character '{character}' was not found in the string.")