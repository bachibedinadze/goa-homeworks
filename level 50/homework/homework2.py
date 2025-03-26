# 3) Catch TypeError when adding an integer to a string
try:
    result = "Hello" + 5
except TypeError:
    print("Error: Cannot add an integer to a string!")