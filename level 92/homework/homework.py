from datetime import datetime

def check_coupon(entered_code, correct_code, current_date, expiration_date):
    return (
        isinstance(entered_code, str)
        and isinstance(correct_code, str)
        and entered_code == correct_code
        and datetime.strptime(current_date, "%B %d, %Y")
            <= datetime.strptime(expiration_date, "%B %d, %Y")
    )