# Example array of 10 strings
arr = [
    "hello",
    "world",
    "thisisaverylongstring",
    "chatgpt",
    "openai",
    "python",
    "example",
    "testcase",
    "stringcheck",
    "short"
]

# Check if any string has more than 10 characters
has_long_string = any(len(s) > 10 for s in arr)

print("At least one string has more than 10 characters:", has_long_string)