# Test all functions
if __name__ == "__main__":
    print("\n--- Number Division ---")
    divide_numbers()
    
    print("\n--- List Index Access ---")
    access_list_index()
    
    print("\n--- Dictionary Key Access ---")
    access_dict_key()
    
    print("\n--- String to Integer Conversion ---")
    convert_to_integer()
    
    print("\n--- Function as Argument ---")
    greet(say_hello)
    
    print("\n--- Function Returning Function (Multiplier) ---")
    times_three = multiplier(3)
    print(f"3 multiplied by 3 is {times_three(3)}")