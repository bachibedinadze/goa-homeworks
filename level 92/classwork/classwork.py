def solve(s):
    lower_count = sum(1 for c in s if c.islower())
    upper_count = len(s) - lower_count

    if upper_count > lower_count:
        return s.upper()
    else:
        return s.lower()