/**Conditional Assignment
* Deanna Henry
* Section 02
* June 18, 2015/ june 19, 2015
*/

//alert("Welcome") TEST

alert("Welcome to Room Painter");

// First clump of information for walls of same and different color

var area = prompt ("How many square feet are you painting?");
console.log(area);

//First conditional

if(area >=4000)
{
    alert("Wow! You have a lot of painting to do?")

}
else if(area >=2000)
{
    alert("Paint please")
}
else
{
    alert("Great you dont have to buy a lot of paint.")
}

// Worked enterd 2000 gave me (paint please) entered 400 gave me (great) enterd 4000 gave me (WOw)

var walls = prompt("How many walls will you be painting?");
console.log(walls);

var color = prompt("How many walls will be a accent color?");
console.log(color);

///calc for walls and color

var samecolor = walls - color;
console.log(samecolor);

gallons = 400


var buy = area / gallons;


if(color == 0)
{
    alert(" You will need to buy "+buy+" gallons of paint");
}

else
{
    alert("Ok I have "+samecolor+" wall(s) that will be one color and "+color+" that will be another. Great!")


// calculation of walls dividing them up if need be and example

// walls (4) - color (1) = samecolor (3)

//calculation of paint needed


//second conditional

var paint = prompt("how many colors will you be buying?")

if(paint==="")
{
    paint = prompt("Sorry It seems you may have forgot to input a number. Can you please enter a number.");

}if(isNaN(paint))
{
    paint = prompt("I see what you tried to do there please use numbers only.");
}
console.log(paint);

//calculation of paint needed
gallons = 400


var buy2 = area / walls * color;
var main = area / walls;
var top = walls - color * main;

var end = top / gallons;


alert(" You will need to buy "+buy2+" gallons of paint for the accent color and "+end+" for the main color.");
}
/* example of math
5000 area / 10 walls = 500 for each walls *2 = 1000 for 2 accent walls

 */




