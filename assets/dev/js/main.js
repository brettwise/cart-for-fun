// Rules
// Each person must have at least two courses, one of which must be a main.
// Each diner cannot have more than one of the same course.
// There is only one piece of cheesecake left.
// Pierre the snobby waiter will not let you have prawn cocktail and salmon fillet in the same meal.
// The total bill amount is displayed when at least one dish has been selected.
// An error message is displayed when I try to select an invalid menu combination.

// ToDo
// add logic to check to see if other diner has selected cheesecake. 
// idea: could create global cheesecake variable.

var grandTotal = 0.00;

var dinerOne = {
  courses: 0,
  main: 0,
  cheeseCake: false,
  total: 0,
  itemsOrdered: [],
};

var dinerTwo = {
  courses: 0,
  main: 0,
  cheeseCake: false,
  total: 0,
  itemsOrdered: [],
};

var dinerSelected = dinerOne;

function cartStuff(e) {
  var target = e.target;
  if (target.className === "unselected") {
    target.className = "selected";
    grandTotal = grandTotal + parseFloat(target.dataset.cost);
    dinerSelected.total = dinerSelected.total + parseFloat(target.dataset.cost);
    document.getElementById('total').textContent = "Total: £" + grandTotal.toFixed(2);
    dinerSelected.itemsOrdered.push(target.dataset.name);
  } else {
    target.className = "unselected";
    grandTotal = grandTotal - parseFloat(target.dataset.cost);
    dinerSelected.total = dinerSelected.total - parseFloat(target.dataset.cost);
    document.getElementById('total').textContent = "Total: £" + grandTotal.toFixed(2);
    for (var i=dinerSelected.itemsOrdered.length-1; i>=0; i--) {
      if (dinerSelected.itemsOrdered[i] === target.dataset.name) {
        dinerSelected.itemsOrdered.splice(i, 1);
      }
    }
  }
}

// I started "refactoring" the above but decided to finish the whole thing first with current approach before actually doing it.
// function setItemClass(e) {
//   var target = e.target;
//   if (target.className === "unselected") {
//     target.className = "selected";
//   }
//   else {
//     target.className = "unselected";
//   }
// }

// function changeGrandTotal(e) {

// }

// function cartStuff(e) {
//   setItemClass(e);
// }

var el = document.getElementById('menu');
el.addEventListener('click', function(e) {
  cartStuff(e);
}, false);

function switchDiner(e) {
  if (dinerSelected === dinerOne) {
    dinerSelected = dinerTwo;
    e.target.textContent = "Tap to Select Diner 1";
  } else {
    dinerSelected = dinerOne;
    e.target.textContent = "Tap to Select Diner 2";
  }
  if (dinerSelected.itemsOrdered.length === 0) {
    var els = document.getElementsByClassName("selected");
    for (var i = 0; i < els.length; i++) {
      els[i].className = "unselected";
    } 
  } else {
    // we are going to use a for loop to sort through each item of the arrary
    // for (var i = 0; i < dinerSelected.itemsOrdered.length; i++) {
    //     if (dinerSelected.itemsOrdered[i] ===
    // }
    // we are going to take each string in the itemsOrdered array
    // we are going to get the array of li elements and compare each element in that array.
    // to the itemsOrdered array.
    // when we find a match we are going to mark that element's className as "selected".
    // 
  }
}

var dinerButton = document.getElementById('switch');
dinerButton.addEventListener('click', function(e) {
  switchDiner(e);
}, false);
