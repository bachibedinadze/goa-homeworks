def csv_to_list(csv_string):
    return [item.strip() for item in csv_string.split(",")]

# Example usage:
csv_list = csv_to_list("apple, banana, cherry, date")
print(csv_list)  # ['apple', 'banana', 'cherry', 'date']