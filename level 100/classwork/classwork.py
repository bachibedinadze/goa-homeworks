def show_sequence(n):
    if n < 0: return f"{n}<0"
    elif n == 0: return "0=0"

    all_numbers = [i for i in range(0, n+1)]
    return f"{'+'.join([str(i) for i in all_numbers])} = {sum(all_numbers)}"