def manual_list(start, end, step, user_num):
    return [x for x in range(start, end, step) if x > user_num]

print(manual_list(1, 20, 2, 10))   # [11, 13, 15, 17, 19]
print(manual_list(5, 50, 5, 25))   # [30, 35, 40, 45]
print(manual_list(-10, 10, 3, -2)) # [0, 3, 6, 9]