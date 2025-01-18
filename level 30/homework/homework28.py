def swap_case_in_sentence(sentence):
    """
    Swaps the case of each letter in the given sentence.

    Args:
        sentence (str): The sentence whose letters' case is to be swapped.

    Returns:
        str: The sentence with each letter's case swapped.
    """
    return sentence.swapcase()

# Example usage
sentence = input("Enter a sentence: ")

# Call the function and print the result
modified_sentence = swap_case_in_sentence(sentence)
print("Modified sentence:", modified_sentence)