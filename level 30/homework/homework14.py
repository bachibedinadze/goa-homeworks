def count_word_occurrences(paragraph, word):
    """
    Counts the number of occurrences of a specified word in a given paragraph.

    Args:
        paragraph (str): The paragraph to search within.
        word (str): The word to count in the paragraph.

    Returns:
        int: The number of occurrences of the word.
    """
    # Convert the paragraph to lowercase and split it into words
    words = paragraph.lower().split()

    # Count the occurrences of the specified word
    return words.count(word.lower())

# Example usage
paragraph = "The quick brown fox jumps over the lazy dog. The fox is clever."
word_to_count = "the"
count = count_word_occurrences(paragraph, word_to_count)
print(f"The word '{word_to_count}' appears {count} times in the paragraph.")