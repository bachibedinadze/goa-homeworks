def mxdiflg(a1, a2):
    if not a1 or not a2:  # Return -1 if either array is empty
        return -1
    
    # Find the longest and shortest lengths in each array
    max_a1, min_a1 = max(len(s) for s in a1), min(len(s) for s in a1)
    max_a2, min_a2 = max(len(s) for s in a2), min(len(s) for s in a2)
    
    # The maximum difference will be between either extremes
    return max(abs(max_a1 - min_a2), abs(max_a2 - min_a1))