def manual_range(start, end, step):
    if step == 0:
        raise ValueError("Step არ უნდა იყოს 0.")  # შეცდომის შეტყობინება
    range_list = list(range(start, end, step))  # დიაპაზონის შექმნა
    for num in range_list:
        if num % 2 == 0:  # ლუწი რიცხვების შემოწმება
            print(num)

# ფუნქციის გამოძახება სხვადასხვა არგუმენტებით
manual_range(0, 10, 1)   # 0, 2, 4, 6, 8
manual_range(5, 20, 3)   # 6, 12, 18
manual_range(-10, 10, 2) # -10, -8, -6, -4, -2, 0, 2, 4, 6, 8
manual_range(2, 20, 4)   # 2, 6, 10, 14, 18
manual_range(30, 10, -3) # 30, 24, 18, 12