def append_items(lst, items):
    for item in items:
        lst.append(item)
    return lst

# Example usage:
result = append_items([1, 2, 3], [4, 5, 6])
print(result)  # [1, 2, 3, 4, 5, 6]