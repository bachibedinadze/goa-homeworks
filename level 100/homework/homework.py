def alphabet_war(fight: str) -> str:
    left = {'w': 4, 'p': 3, 'b': 2, 's': 1}
    right = {'m': 4, 'q': 3, 'd': 2, 'z': 1}
    
    left_score = sum(left.get(ch, 0) for ch in fight)
    right_score = sum(right.get(ch, 0) for ch in fight)
    
    if left_score > right_score:
        return "Left side wins!"
    elif right_score > left_score:
        return "Right side wins!"
    else:
        return "Let's fight again!"