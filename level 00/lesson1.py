from turtle import *


#we want to pain a house

#step 1   draw a square
speed (30)
width (7)
color ("red")
begin_fill()
forward (200)
left (90)
forward (200)
left (90)
forward (200)
left (90)
forward (200)
left (90)
end_fill()
#end of square

#drawing a door


forward (70)
left (90)
color ("blue")
begin_fill()
forward (120)
right (90)
forward (60)
right(90)
forward(120)
end_fill()

#drawing roof
penup()
goto(200, 200)
pendown()

color("green")
begin_fill()
right (150)
forward (200)
left (120)
forward (200)
end_fill()
#end of roof

#drawing a window
penup()
goto(150, 150)
pendown()

color ("cyan")
begin_fill()
left (30)
forward (30)
left(90)
forward (40)
left(90)
forward (40)
left(90)
forward(40)
left(90)
forward (10)
end_fill()


penup()
begin_fill()
goto(50, 150)
pendown()
forward (30)
right(90)
forward (40)
right(90)
forward (40)
right(90)
forward(40)
right(90)
forward (10)
end_fill()





exitonclick()