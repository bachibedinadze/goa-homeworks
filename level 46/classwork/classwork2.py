palindromes = [x for x in range(10, 201) if str(x) == str(x)[::-1]]
print(palindromes)