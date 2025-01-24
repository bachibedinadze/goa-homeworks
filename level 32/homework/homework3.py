def insert_word(sentence, word, index):
    words = sentence.split()
    if 0 <= index <= len(words):
        words.insert(index, word)
        return " ".join(words)
    else:
        return "Index out of range"

# Example usage:
new_sentence = insert_word("I love Python programming", "really", 2)
print(new_sentence)  # I love really Python programming