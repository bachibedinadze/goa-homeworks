def vowel_indices(word):
    vowels = 'aeiouAEIOU'
    return [i + 1 for i, char in enumerate(word) if char in vowels]