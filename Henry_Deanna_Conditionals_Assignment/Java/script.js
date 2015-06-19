/**Conditional Assignment
* Deanna Henry
* Section 02
* June 18, 2015
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

var color = prompt("How many walls will be the another color?");
console.log(color);


// calculation of walls dividing them up if need bee

var samecolor = walls - color;
console.log(samecolor);

// walls (4) - color (1) = samecolor (3)

//second conditional


alert("Ok I have "+samecolor+" wall(s) that will be one color and "+color+" that will be another. Great!");

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

var buy = area / gallons;

var color1 = area / walls;

var color 2 = color1






