def division_calculator():
    try:
        numerator = float(input("Enter the numerator: "))
        denominator = float(input("Enter the denominator: "))

        if denominator == 0:
            raise ValueError("Division by zero is not allowed.")

        result = numerator / denominator
        print(f"The result is: {result}")

    except ValueError as ve:
        print(f"ValueError: {ve}")
    except Exception as e:
        print(f"Invalid input: {e}")
    finally:
        print("Operation complete.")

division_calculator()