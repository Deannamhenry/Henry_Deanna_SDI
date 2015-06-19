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

if(area >= 1000)
{
    alert("Wow! You have a lot of painting to do?")

}else
{
    alert("Great you dont have to buy a lot of paint.")
}

// Worked enterd 2000 gave me (wow) entered 400 gave me (great)

var walls = prompt("How many walls will you be painting?");
console.log(walls);

var color = prompt("How many walls will be the another color?");
console.log(color);

// calculation of walls

var samecolor = walls - color;
console.log(samecolor);

// walls (4) - color (1) = samecolor (3)
//


alert("Ok I have "+samecolor+" wall one color and "+color+" another. Great!");


