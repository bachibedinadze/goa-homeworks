# Return a Function – Multiplier
def multiplier(factor):
    def multiply_by_factor(number):
        return number * factor
    return multiply_by_factor