# 3) Tuple Immutability
my_tuple = (10, 20, 30, 40, 50)

try:
    my_tuple[1] = 99  # Attempt to modify a tuple element (this will cause an error)
except TypeError as e:
    print("Error:", e)  # This confirms that tuples are immutable