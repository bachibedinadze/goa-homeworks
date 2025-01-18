def count_word_occurrences_in_text(text, word):
    """
    Counts the occurrences of a specified word in the given text.

    Args:
        text (str): The text to search within.
        word (str): The word to count in the text.

    Returns:
        int: The number of occurrences of the specified word in the text.
    """
    # Convert text to lowercase to ensure case-insensitive counting
    text = text.lower()

    # Split the text into words
    words = text.split()

    # Count the occurrences of the word
    return words.count(word.lower())

# Example usage
text = "The quick brown fox jumps over the lazy dog. The fox is quick."
word_to_count = "the"
count = count_word_occurrences_in_text(text, word_to_count)
print(f"The word '{word_to_count}' appears {count} times in the text.")