$(document).ready(function() {
  $("form#grocery-list").submit(function(event){
    event.preventDefault();
    // Array od HTML id names
    var itemNames = ["item-1", "item-2", "item-3", "item-4"];

    // Initializes two empty arrays
    // var groceryList = []; DEPRECIATED!!!!!
    var upperCaseGroceryList = [];

    // Uses item names to create an array of user inputted grocery items
    // itemNames.forEach(function(redRabbitAlien){ DEPRECIATED!!!!!!
    //   groceryList.push($("#" + redRabbitAlien).val()); DEPRECIATED!!!!!!
    // }); DEPRECIATED!!!!!!

    upperCaseGroceryList = itemNames.map(function(suchMunDoges){
      return ($("#" + suchMunDoges).val()).toUpperCase();
    });

    // Sorts the newly created grocery array
    // groceryList.sort(); DEPRECIATED!!!!!!
    upperCaseGroceryList.sort();

    // upperCaseGroceryList = groceryList.map(function(greenTiger){ DEPRECIATED!!!!!!
    //   return greenTiger.toUpperCase(); DEPRECIATED!!!!!!
    // }); DEPRECIATED!!!!!!

    $("form#grocery-list").hide();

    upperCaseGroceryList.forEach(function(pinkBigfoot){
      $("ul#grocery-list-ul").append("<li>" + pinkBigfoot + "</li>");
    });

    $("div.list-o-groceries").show();
  });
});
