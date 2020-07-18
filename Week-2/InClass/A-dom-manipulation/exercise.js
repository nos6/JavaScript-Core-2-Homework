/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
let paragraph= document.querySelectorAll("p");
console.log(paragraph);

let classHeader= document.querySelector(".site-header");
console.log(classHeader);

let jumbotron = document.querySelector("#jumbotron-text");
console.log(jumbotron);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click", function(event) {
  alert("Thanks for visiting Bikes for Refugees!")
})


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

let changeColorButton= document.querySelector("#bgrChangeBtn");


changeColorButton.addEventListener("click" , function(){
  
  
    document.body.style.backgroundColor= "red";
  
    /*let changeColorButton= document.querySelector("#bgrChangeBtn");
    //let colors= ["green", "red", "yellow","blue"];
    
    changeColorButton.addEventListener("click" , function(){
      
      //let randomColor= math.floor(math.random() * colors.length);
      document.body.style.backgroundColor= "red";
      
    
    })
    */


/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
let addText= document.querySelector("#addTextBtn");

let paragraph = document.createElement("p");


addText.addEventListener("click", function(){
  paragraph.textContent= "Read more below.";
  addText.appendChild(paragraph)
  
})


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/



let largerTextLinks= document.querySelector("#largerLinksBtn");
let myLinks= document.querySelectorAll("a");

largerTextLinks.addEventListener("click", function(){
  
  for(i=0;i<myLinks.length;i++){
    myLinks[i].style.fontSize= "30px";
  }
}) 
})
