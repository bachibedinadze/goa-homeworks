# სიის შექმნა
my_list = [10, 20, 30, 40, 50]

# პირველი ელემენტის მიღება
first_element = my_list[0]

print(first_element)  # შედეგი: 10




my_list = [10, 20, 30, 40, 50]
last_element = my_list[-1]
print(last_element)  # შედეგი: 50




my_list = [10, 20, 30, 40, 50]
first_three = my_list[:3]
print(first_three)  # შედეგი: [10, 20, 30]




my_string = "Hello, World!"
last_five = my_string[-5:]
print(last_five)  # შედეგი: "orld!"




my_string = "Python"
reversed_string = my_string[::-1]
print(reversed_string)  # შედეგი: "nohtyP"




my_list = [10, 20, 30, 40, 50, 60, 70, 80]
every_third = my_list[::3]
print(every_third)  # შედეგი: [10, 40, 70]




my_list = [10, 20, 30, 40, 50, 60]
mid_index = len(my_list) // 2

first_half = my_list[:mid_index]
second_half = my_list[mid_index:]

print(first_half)   # შედეგი: [10, 20, 30]
print(second_half)  # შედეგი: [40, 50, 60]
