def nb_dig(n, d):
    count = 0
    for k in range(n + 1):
        square = k * k
        count += str(square).count(str(d))
    return count