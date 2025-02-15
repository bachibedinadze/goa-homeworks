def no_duplicates(user_list):
    return list(set(user_list))  # set() აშორებს დუბლიკატებს, list() აბრუნებს ისევ სიას

# ფუნქციის გამოძახება სხვადასხვა არგუმენტებით
list1 = [1, 2, 3, 3, 4, 5, 5, 6]
list2 = ["apple", "banana", "apple", "cherry"]
list3 = [True, False, True, True, False, 1, 0]

print(no_duplicates(list1))  # [1, 2, 3, 4, 5, 6]
print(no_duplicates(list2))  # ["apple", "banana", "cherry"]
print(no_duplicates(list3))  # [True, False] (True == 1, False == 0 Python-ში)