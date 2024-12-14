while True:
    # Taking user input for the password
    password = input("Enter the password: ")

    # Check if the entered password is correct
    if password == correct_password:
        print("Password accepted!")
        break
    else:
        # Increment the incorrect attempts counter
        incorrect_attempts += 1
        print("Incorrect password. Please try again.")

# After the loop ends, print the count of incorrect attempts
print(f"You had {incorrect_attempts} incorrect attempts.")