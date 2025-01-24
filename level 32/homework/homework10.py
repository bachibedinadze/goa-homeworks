def insert_item(lst, index, item):
    lst.insert(index, item)
    return lst

# Example usage:
result = insert_item([1, 2, 3], 1, 99)
print(result)  # [1, 99, 2, 3]