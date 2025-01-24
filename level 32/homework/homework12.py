def insert_at_end(lst, item):
    lst.insert(len(lst), item)
    return lst

# Example usage:
result = insert_at_end([1, 2, 3], 4)
print(result)  # [1, 2, 3, 4]