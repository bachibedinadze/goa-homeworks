def my_languages(results: dict) -> list:
    return [lang for lang, score in sorted(results.items(), key=lambda x: x[1], reverse=True) if score >= 60]