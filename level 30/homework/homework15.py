# Ask the user for a character
character = input("Enter a character: ")

# Given string to search in
input_string = "Hello, how are you doing today? I hope you're having a good day."

# Count the occurrences of the character in the string
count = input_string.count(character)

# Print the result
print(f"The character '{character}' appears {count} times in the string.")