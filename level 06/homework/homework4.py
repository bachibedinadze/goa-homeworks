import turtle

# შექმენი ეკრანი
screen = turtle.Screen()
screen.bgcolor("lightblue")

# შექმენი turtle ობიექტი
my_turtle = turtle.Turtle()
my_turtle.shape("turtle")
my_turtle.color("orange")
my_turtle.speed(10)

# ნამუშევარი (მრავალკუთხა ნახაზი)
sides = 6  # რაოდენობა მხარეების
angle = 360 / sides  # ნებისმიერი კუთხე

for _ in range(sides):
    my_turtle.forward(100)  # გადადგი 100 პიქსელი წინ
    my_turtle.left(angle)  # მარცხნივ მობრუნება

# დასრულება
turtle.done()