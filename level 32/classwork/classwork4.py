def manual_append(main_list, item_to_insert):
    main_list.insert(len(main_list), item_to_insert)
    return main_list

# მაგალითის გამოყენება
example_list = [1, 2, 3]
item = 4
result = manual_append(example_list, item)
print(result)  # [1, 2, 3, 4]