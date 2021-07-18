var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
 //console.log(ul);
function inputLength() {
	return input.value.length;
};

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
// Add a button
	const liButton = document.createElement("BUTTON");

  liButton.style.backgroundcolor= "pink";
	//liButton.style.delLiButton;
	liButton.innerHTML = "delete";
  li.appendChild(liButton);

	};

function addListAfterClick() {
	
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
function toggleClassDoneOnAndOff(event) {
	    if (event.target.tagName=== "LI") {
		event.target.classList.toggle("done");
	}
};

              function removeClassHide(arrayID, arrClassNameLi, event) {
           
	 //    remove button specific button
	 var myObj = document.getElementById(arrayID);    
         
           myObj.remove();
        
        //     remove specific <li> item
              
               let str = arrayID;
               let xx = str.slice(3,4);
               var arrayLI = "delli[" + xx +"]" 
                        
         var myLi = document.getElementById(arrayLI);

          myLi.remove();
};       
 button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleClassDoneOnAndOff);
