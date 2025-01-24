def insert_at_beginning(lst, item):
    lst.insert(0, item)
    return lst

# Example usage:
result = insert_at_beginning([1, 2, 3], 0)
print(result)  # [0, 1, 2, 3]