# მიიღეთ მომხმარებლისგან ქულა
score = float(input("შეიტანეთ ქულა (0-100): "))

# შეამოწმეთ ქულის მიხედვით გრადი
if 90 <= score <= 100:
    print("გრადი: A")
elif 80 <= score <= 89:
    print("გრადი: B")
elif 70 <= score <= 79:
    print("გრადი: C")
elif 60 <= score <= 69:
    print("გრადი: D")
elif score < 60:
    print("გრადი: F")
else:
    print("შეიტანეთ სწორი ქულა (0-100).")