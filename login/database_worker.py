import psycopg2
import datetime
# Function to add an item to the table
def add_item(name, pas,active):
    db_config = {
        "dbname": "ahha",
        "user": "denje",
        "password": "supersecret",
        "host": "localhost",  # Change to your database host if not local
        "port": 5432          # Default PostgreSQL port
    }

    create_table_query = """
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        active BOOLEAN,
        datet VARCHAR(255)
    );
    """

    insert_query = "INSERT INTO users (name, password,active,datet) VALUES (%s, %s,%s,%s);"

    try:
        # Connect to the PostgreSQL database
        connection = psycopg2.connect(**db_config)
        cursor = connection.cursor()

        # Create table if it does not exist
        cursor.execute(create_table_query)
        connection.commit()
        t = str(datetime.datetime.now())
        # Insert the item into the table
        cursor.execute(insert_query, (name, pas,active,t))
        connection.commit()

        print("Item added successfully!")

    except Exception as e:
        print(f"An error occurred: {e}")

    finally:
        # Close the database connection
        if cursor:
            cursor.close()
        if connection:
            connection.close()

