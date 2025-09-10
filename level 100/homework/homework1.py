def adjacent_element_product(arr):
    return max(arr[i] * arr[i+1] for i in range(len(arr) - 1))