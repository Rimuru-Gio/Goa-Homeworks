import random

def generate_random_teams(students, team_count):
    if team_count <= 0:
        raise ValueError("Number of teams must be greater than 0.")
    if team_count > len(students):
        raise ValueError("Number of teams cannot exceed the number of students.")

    # Shuffle the students to ensure randomness
    random.shuffle(students)

    # Create the teams
    teams = {i: [] for i in range(1, team_count + 1)}
    
    for i, student in enumerate(students):
        team_number = (i % team_count) + 1
        teams[team_number].append(student)

    return teams

# Example usage
students_list = ["Ana", "Dato", "Gio", "Mate", "Eka", "Nika", "Saba", "Salome", "Lizi"]
number_of_teams = 3

try:
    teams = generate_random_teams(students_list, number_of_teams)
    for team, members in teams.items():
        print(f"Team {team}: {', '.join(members)}")
except ValueError as e:
    print(f"Error: {e}")