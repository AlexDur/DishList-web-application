/* TODO: When L1 and L2 tiles are clicked show new site (L1 - L2 - category)  
    * Add input filds in order to create and save a list of online recipes including various properties
    * First, value are filled in the three input fields and then they are output via the button
    * Make this lost pop up in a dropdown menu when clickling on L2 category 
    * Provide for each entry input fields for
        - name of the dish
        - short description 
        - miscellanous 
        - the weblink*/
        
  /* TODO: Create an "edit" and "delete" button in each entry row */ 
        
     /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 

 /*  $(document).ready(function() {
    $('.dropdown').click(function() {
   
         $('.dropdown-menu').slideToggle();
     });
    }); */
  

/* Create entry for list using one button to output three input values */
/* let entryButton = document.querySelector("createEntry");
entryButton.addEventListener("click", anlegen);

function anlegen() {
  let input = document.querySelector("#input1");
  let input = document.querySelector("#input2");
  let input = document.querySelector("#input3");

  let output = document.querySelector("#output1"+"#output2"+"#output3"); */
 /*  let output = document.querySelector("#output2");
  let output = document.querySelector("#output3");
 */
 // HTML-Element which is to be created
/*  let newDivisionElement = document.createElement("div") */

// Here goes the content of the input field
 /*  let newInputContent = document.createTextNode(input.value);

  newDivisionElement.appendChild(newInputContent);
  output.appendChild(newDivisionElement);

   */
// To empty input field again
/*   input.value = "";
} */


let recipes = [];
// example of output (id:02374872364324, dish: "Kartoffelsalat", description: "Würzige Note mit Essig oder Mayonaise", weblink: www.lecker.de)
  const addRecipe = (ev) =>{
    ev.preventDefault();   // to avoid loss of output after automatic reloading of browser
    let recipe = {
      /* id: Date.now(), */
      dish: document.getElementById("dish").value,
      description: document.getElementById("descr").value,
      weblink: document.getElementById("weblink").value
    }
    recipes.push(recipe);
    document.forms[0].reset(); //to clear the form for the next entry

    // for display purposes only
    console.warn("added", {recipes} );
    let pre = document.querySelector("#msg pre");
    pre.textContent = "\n" + JSON.stringify(recipes, "\t", 3);

    

    // saving to localstorage
    localStorage.setItem("RecipeList", JSON.stringify(recipes) );
  }
    document.addEventListener("DOMContentLoaded", ()=>{
        document.getElementById("btnEntry2").addEventListener("click", addRecipe);
    })
