sentence = "This is an example sentence containing different words"
words_list = sentence.split()
vowels = {'a', 'e', 'i', 'o', 'u'}
filtered_words = [word for word in words_list if any(char in vowels for char in word.lower()) and len(word) > 5]