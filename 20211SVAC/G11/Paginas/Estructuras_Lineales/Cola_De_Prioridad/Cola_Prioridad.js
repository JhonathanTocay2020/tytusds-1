$(document).ready(main);


function Queue(){
  
  this.dataStore = Array.prototype.slice.call(arguments, 0);
  this.enqueue = enqueue; 
  this.dequeue = dequeue;
  this.isEmpty = isEmpty;
  this.print = print;
  
  function enqueue (element) {
    this.dataStore.push(element);
  }
  
  function dequeue(){
    var priority = this.dataStore[0].priority;
    var priorizedItem = 0;
    this.dataStore.forEach(function (item, index ){
      if(item.priority < priority) {
        priority = item.priority;
        priorizedItem = index;
      }
    });
    return this.dataStore.splice(priorizedItem, 1)[0];
  }
  
  function isEmpty(){
    return this.dataStore.length == 0;  
  }
  
  function print(element){
    this.dataStore.map(function(patient){
      element.appendChild(patient.node);
    });
  }
}

function Patient(name, priority){
  this.name = name; 
  this.priority = priority;
  this.time = Math.random()*10 + 3;
  var div = document.createElement("div");
  div.setAttribute("id", "patient-"+this.name);
  div.appendChild(document.createTextNode(this.name + "\n("+ this.priority+")"));
  this.node =  div;
}

function printPatients(queue){
  var divQueue = document.getElementById("patients-queue");
  divQueue.innerHTML = "";
  queue.print(divQueue);
}

function addPatient(queue){
  var nameInput = document.getElementById("patient-name");
  var priorityInput = document.getElementById("patient-priority");
  if(nameInput.value.length!=0) queue.enqueue(new Patient(nameInput.value, priorityInput.value));
  nameInput.value = "";   
  priorityInput.value = "";
  printPatients(queue);
}

function nextPatient(queue){
  var current = document.getElementById("current-patient");
  current.innerHTML="";
  if(!queue.isEmpty()){
      var erased = queue.dequeue();
      current.appendChild(erased.node);
      printPatients(queue);
      setTimeout(attendPatient,  erased.time*1000);
  }
}

function attendPatient(queue){
    var current = document.getElementById("current-patient");
    current.innerHTML="";
}


function main () {
    var t = new Queue()
	$('#add-patient').click(function(){
        addPatient(t);
         
        
        
	});
    $('#attend-patient').click(function(){
        
        nextPatient(t);
	});
   
	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}