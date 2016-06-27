// <!-- javascript -->
// <!-- in order to link to the javascript we need to address it in the header of the HTML -->
<head>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <script type="text/javascript" src="js/jQuery.js"></script>
</head>

// <!-- printing to Javascript (usefull for debugging) -->
consol.log("Hello world!");
// consol.log prints to the consol
// always use Semi Colons when ending statements in JavaScript
// enclosing something in () tellsJavascrip that you do not wish a return value
// enclosin in "" tells JavaScript that you have a string

// appending info to an html element
$("#header").append()
// we tell the system that we are selecting header via the $("#header")
// we tell it we want to add to the html by using the action .append()

// slicing a string
var str1 = 'The morning is upon us.';
var str2 = str1.slice(4, -2);

console.log(str2); // OUTPUT: morning is upon u
// the above will remove 4 characters from the left and 2 from the right of the string. thus "The " and "s.

// to manipulate a string here is an example
var s = "audacity";

var udacityizer = function(s) {
// first we can slice out the beginning 91st character)
s = s.slice(1);
// then we can replace characters within the string to model it to our needs
s = s.replace(/u/g, "U");
// this can also be done with the code below by selecting and transforming the index in a string
s = s[0].toUpperCase()

// arrays
var skills.length = ["awesomeness", "programming","teaching","JS"]
console.log(skills)


    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));