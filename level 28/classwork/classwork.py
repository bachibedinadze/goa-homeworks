def manual_index(main_string, search_string):
    # მივდივართ მთავარ სტრინგში თითოეულ სიმბოლოზე და ვამოწმებთ, იწყება თუ არა საძიებელი სტრინგი ამ ინდექსზე
    for i in range(len(main_string) - len(search_string) + 1):
        if main_string[i:i+len(search_string)] == search_string:
            return i
    return -1  # თუ საძიებელი სტრინგი არ მოიძებნება, ვაბრუნებთ -1-ს

# გამოყენების მაგალითი:
main = "გამარჯობა, როგორ ხარ?"
search = "როგორ"
print(manual_index(main, search))  # შედეგი: 9
