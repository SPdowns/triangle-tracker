//User Logic
$(document).ready(function() {
  $("form#triangleForm").submit(function(event) {
  event.preventDefault()

  let side01 = parseInt($("#side01").val());
  let side02 = parseInt($("#side02").val());
  let side03 = parseInt($("#side03").val());

  let triangle = triFunction(side01, side02, side03)


  $("#finalTriangle").text(triangle)
  });
});


//Business Logic
function triFunction(side01, side02, side03) {
  var answer;
  
  if (side01 + side02 <= side03 || side02 + side03 <= side01 || side03 + side01 <= side02) {
    answer = "not a triangle";
  } else if (side01 === side02 && side02 === side03){
    answer = "equilateral"
  } else if (side01 === side02 || side02 === side03 || side03 === side01) {
    answer = "isosceles";
  } else if (side01 !== side02 || side02 !== side03 || side03 !== side01){
    answer = "scalene"
}
    return answer;
}