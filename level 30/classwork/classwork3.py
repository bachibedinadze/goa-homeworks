def manual_swapcase(input_string):
    """
    ცვლის ყველა სიმბოლოს ტcase-ს (uppercase ხდება lowercase და პირიქით) მოცემულ სტრინგში.

    Args:
        input_string (str): სტრინგი, რომელსაც უნდა შეეცვალოს ტcase.
    
    Returns:
        str: სტრინგი, რომლის ყველა სიმბოლო შეიცვალა ტcase-ში.
    """
    swapped_string = ''
    
    # თითოეული სიმბოლოსთვის გადავამოწმოთ ტcase და გამოვცვალოთ
    for char in input_string:
        if char.islower():
            swapped_string += char.upper()  # პატარა ტანჯად კი uppercase-ს ვაქცევთ
        elif char.isupper():
            swapped_string += char.lower()  # დიდი ტანჯად კი lowercase-ს ვაქცევთ
        else:
            swapped_string += char  # არალათინური სიმბოლოები (მაგ: ციფრები, სიმბოლები) ისე რჩება
    
    return swapped_string

# მაგალითი
input_string = input("შეიყვანეთ სტრინგი: ")

# ფუნქციის გამოძახება და შედეგის გამოხატვა
result = manual_swapcase(input_string)
print("გადამუშავებული სტრინგი:", result)