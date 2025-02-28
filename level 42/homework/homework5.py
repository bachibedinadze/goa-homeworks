user = {"name": "Luka", "email": "luka@example.com"}

print(user.get("name"))   # გამოტანს: Luka
print(user.get("phone", "Not Found"))  # თუ key არ არსებობს, გამოიტანს: Not Found