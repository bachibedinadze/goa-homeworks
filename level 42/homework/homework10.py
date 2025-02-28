def sum_numeric_values(data):
    return sum(value for value in data.values() if isinstance(value, (int, float)))

info = {"age": 25, "height": 175, "weight": 70, "name": "Tornike"}
print(sum_numeric_values(info))  # 25 + 175 + 70 = 270