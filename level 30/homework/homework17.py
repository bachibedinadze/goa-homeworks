# Input string
input_string = "Hello, how are you? Hello again!"

# Find the position of the first occurrence of the word "hello"
position = input_string.lower().find("hello")

# Print the result
if position != -1:
    print(f'The word "hello" first occurs at index: {position}')
else:
    print('The word "hello" was not found in the string.')