def append_all_elements(lst1, lst2):
    lst1.extend(lst2)
    return lst1

# Example usage:
result = append_all_elements([1, 2, 3], [4, 5, 6])
print(result)  # [1, 2, 3, 4, 5, 6]