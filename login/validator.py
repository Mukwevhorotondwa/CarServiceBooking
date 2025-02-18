def is_password_secure(string):
    length_check = False
    has_upper = False
    has_lower = False
    has_number = False
    has_special = False

    if len(string)>= 8:
        length_check = True
    for char in string:
        if char.isupper():
            has_upper = True
        elif char.islower():
             has_lower= True
        elif char.isnumeric():
            has_number = True
        else:
             has_special = True
    return (has_lower*has_number*has_lower*has_upper*length_check*has_special)