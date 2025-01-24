def paragraph_to_sentences(paragraph):
    sentences = [sentence.strip() for sentence in paragraph.split(".") if sentence.strip()]
    return sentences

# Example usage:
sentences = paragraph_to_sentences("This is the first sentence. Here is another. And the last one.")
print(sentences)  
# ['This is the first sentence', 'Here is another', 'And the last one']