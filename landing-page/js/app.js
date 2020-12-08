/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
        // the global var of navigation
// var nav_bar = document.getElementById(navbar__list),
//     sec = document.getElementById (section)


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active




let main = document.getElementsByTagName("main")[0];
let sections = main.getElementsByTagName("section");
let NumOfSections = sections.length;
console.log(NumOfSections);


for(i=0; i < NumOfSections; i++){
    let xx = sections[i].getElementsByTagName("h2")[0].innerHTML;
    // xx.innerHTML = "Good";
    // console.log(xx);
    createListItem(xx);
}

function createListItem(topic) {
  var node = document.createElement("LI");
  var textnode = document.createTextNode(topic);
  node.appendChild(textnode);
  document.getElementById("navbar__list").appendChild(node);
}