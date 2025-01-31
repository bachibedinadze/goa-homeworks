def remove_by_indexes(main_list, indexes_list):
    """
    ფუნქცია, რომელიც მოცემული ინდექსების მიხედვით ელემენტებს შლის მთავარ სიიდან.

    Parameters:
    main_list (list): მთავარი სია, საიდანაც ელემენტები უნდა წავშალოთ.
    indexes_list (list): ინდექსების სია, რომლებიც უნდა წაიშალოს.

    Returns:
    list: ახალი სია, წაშლილი ელემენტების გარეშე.
    """
    
    indexes_list = sorted(indexes_list, reverse=True)
    
    for index in indexes_list:
        if 0 <= index < len(main_list):
            main_list.pop(index)
    
    return main_list

main_list = [10, 20, 30, 40, 50]
indexes_list = [1, 3]

result = remove_by_indexes(main_list, indexes_list)
print(result)