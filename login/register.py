from database_worker import add_item
from validator import is_password_secure
def reg():
    user_name = input("enter username: ")
    password = input("enter password")
    if is_password_secure(password):
        add_item(user_name,password,True)
    else: 
        print("pass word is not secure try again")
        reg()