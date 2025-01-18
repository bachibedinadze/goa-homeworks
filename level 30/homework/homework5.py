def to_lowercase(input_string):
    """
    Converts a mixed-case string to all lowercase letters.

    Args:
        input_string (str): The string to be converted.

    Returns:
        str: The input string in all lowercase letters.
    """
    return input_string.lower()

# Example usage
mixed_case_string = "ThIs Is A MiXeD-CaSe StRiNg!"
lowercase_string = to_lowercase(mixed_case_string)
print("Lowercase String:", lowercase_string)