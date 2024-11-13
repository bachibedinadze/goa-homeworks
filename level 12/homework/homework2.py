# 1. შედარების და ლოგიკური ოპერაციები: დიდი თუ მცირე
x = 5
y = 10
print(x < y and x != y)  # True, რადგან x პატარაა y-დან და არ უდრის y-ს

# 2. შედარების და ლოგიკური ოპერაციები: რომელი უფრო დიდია
a = 15
b = 12
c = 8
print(a > b or b > c)  # True, რადგან a არის უფრო დიდი b-დან

# 3. არა (not) და შედარება
is_sunny = False
is_raining = True
print(not is_sunny and is_raining)  # True, რადგან არა სიხალისე და ეწვევა წვიმა

# 4. აბსოლუტური შედარება
temperature = 23
is_cold = temperature < 10
is_hot = temperature > 30
print(is_cold or is_hot)  # False, რადგან არც ცივი, არც ცხელია

# 5. ბევრი შედარება და ლოგიკური ოპერაცია
age = 25
has_license = True
has_car = False
print(age >= 18 and (has_license or has_car))  # True, რადგან პიროვნებას აქვს მართვის მოწმობა ან მანქანა

# 6. ორი პირობიდან ერთ-ერთი დაკმაყოფილებულია
a = 10
b = 20
c = 15
print((a < b) or (c == 10))  # True, რადგან a უფრო პატარაა b-დან

# 7. მარტივი შედარება და არა (not)
is_raining = True
print(not is_raining)  # False, რადგან წვიმს

# 8. შედარება და ან (or) ოპერაცია
num1 = 25
num2 = 30
num3 = 40
print((num1 == 25) or (num2 == 30) or (num3 == 50))  # True, რადგან num2 არის 30

# 9. არასწორი შესამჩნევი
x = 50
y = 30
z = 60
print(x != y and x > z)  # False, რადგან x არის უფრო დიდი, მაგრამ x != y არ არის საკმარისი

# 10. ნაკლებად სავარაუდო შედეგი
height = 170
weight = 70
is_tall = height >= 180
is_healthy = weight <= 80
print(is_tall and is_healthy)  # False, რადგან სიმაღლე არ არის საკმარისი, რომ იყოს "მაღალი"
