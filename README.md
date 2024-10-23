Overview:


Your task is to create an application that generates a watering schedule for the next 12
weeks for all our plants. We encourage you to be creative and present the schedule in a
way that is easy for a plant caretaker to understand. The schedule should clearly show
which plants need watering on which dates.


You are free to use any language and platform you're comfortable with. The solution can
be a User Interface (UI), command-line tool, or even a schedule written to a file—
whatever suits your style. Remember to include a README with instructions on how to
run your code, as well as any known issues or complexities. Additionally, feel free to
describe any extra features you would have liked to add.
Requirements:

Requirements:

• The schedule should cover the next 12 weeks, starting from next Monday.

• Plants should not be watered on Saturdays or Sundays (work-life balance!).

• Each plant has a watering frequency, and the application should generate a
schedule based on that.

• Every plant should be watered on the first day of the schedule (next Monday),
after which its specific schedule should be followed as closely as possible.

• You’ve been provided with a JSON file containing data about the plants,
including their watering frequency (in days).


Acceptance Criteria:

The user can easily view which plants to water on which date(s).

• The schedule starts on next Monday and covers the following 12 weeks.

• No watering takes place on weekends (Saturdays and Sundays).

• Each plant is watered based on its desired schedule, considering weekends.


Assumptions:

• No watering on weekends: Plants can tolerate being watered a day before or
after if their schedule falls on a weekend.

• Work-life balance: Assume we don't come to the office on weekends.

• No time constraints: You don’t need to worry about how many plants can be
watered in a day; watering an individual plant takes no time at all (except for the
bonus challenge).

• Start from next Monday: All plants will be watered on the first day (next
Monday), and then on their regular schedule.

• Plant-specific schedules: We assume that all the information you need (like the
watering frequency) is already provided in the JSON file.