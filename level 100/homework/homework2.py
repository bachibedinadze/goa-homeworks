def filter_string(value: str) -> int:
    return int("".join(ch for ch in value if ch.isdigit()))