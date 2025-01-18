def manual_swapcase(input_string):
    """
    შეცვლის ყველა სიმბოლოს შემთხვევას (uppercase -> lowercase, lowercase -> uppercase)
    
    Args:
        input_string (str): ის სტრინგი, რომელსაც უნდა შევცვალოთ თითოეული სიმბოლო.
    
    Returns:
        str: შეცვლილი სტრინგი.
    """
    swapped_string = ""
    
    # გადავდივართ თითოეულ სიმბოლოს და ვაკეთებთ swapcase
    for char in input_string:
        if char.islower():
            swapped_string += char.upper()
        elif char.isupper():
            swapped_string += char.lower()
        else:
            swapped_string += char  # სიმბოლოები, რომლებსაც არ აქვს შემთხვევა (მაგ. ციფრები, ნიშნები)
    
    return swapped_string

# მაგალითი
input_string = input("შეიყვანეთ სტრინგი: ")
modified_string = manual_swapcase(input_string)
print("შეცვლილი სტრინგი:", modified_string)