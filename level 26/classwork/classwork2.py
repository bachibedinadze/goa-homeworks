def manual_len(lst):
    length = 0  # სიის სიგრძის სათვლელი ცვლადი
    for _ in lst:  # თითოეულ ელემენტზე გავდივართ
        length += 1
    return length

# ფუნქციის გამოძახება სხვადასხვა სიებით
list1 = [1, 2, 3, 4, 5]
print(f"სიის სიგრძე: {manual_len(list1)}")  # 5

list2 = ["ა", "ბ", "გ"]
print(f"სიის სიგრძე: {manual_len(list2)}")  # 3

list3 = []
print(f"სიის სიგრძე: {manual_len(list3)}")  # 0

list4 = [True, False, True, False, False]
print(f"სიის სიგრძე: {manual_len(list4)}")  # 5

list5 = [1, [2, 3], "ტექსტი", 4.5]
print(f"სიის სიგრძე: {manual_len(list5)}")  # 4