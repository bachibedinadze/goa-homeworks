try:
    num = 10
    num += "20"
except TypeError as e:
    print(f"TypeError მოხდა: {e}")