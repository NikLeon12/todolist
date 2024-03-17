window.onload = init;

function init() {
  var addBtn      = document.getElementById("addButton")
    , myTextInput = document.getElementById("textInput")
    , taskName    = " "
    , task        = document.getElementsByTagName("li")
    , mylist      = document.getElementById("list")
  ;

  addBtn.addEventListener("click", function(){
	console.log("addBtn");
	taskName  = textInput.value;
	if (taskName == "") {
		alert("Будь ласка, введіть задачу!");
	}
	else {
		var li = document.createElement("li");
		li.innerHTML = taskName;
		mylist.appendChild(li);
		textInput.value = '';
	}
  });

  mylist.addEventListener("click", function(event){
	console.log("deleteTask");
	console.log(event.target);
	mylist.removeChild(event.target);
  });

}