def sort_my_string(s: str) -> str:
    even = s[::2] 
    odd = s[1::2] 
    return even + " " + odd