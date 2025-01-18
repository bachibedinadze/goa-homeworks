# Input sentence
sentence = "I am learning Python programming with Python examples."

# Find the position of the first occurrence of "Python"
position = sentence.find("Python")

# Print the result
if position != -1:
    print(f'The word "Python" first occurs at position: {position}')
else:
    print('The word "Python" was not found in the sentence.')