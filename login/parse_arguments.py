import argparse
def register():
    parser = argparse.ArgumentParser(description="add a usser")
    
    parser.add_argument("name", help = "username")
    parser.add_argument("password", help = "password")
    parser.add_argument("active", help = "is user active")
    args = parser.parse_args()
    return args