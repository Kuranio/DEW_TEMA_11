const toppingsForm = document.getElementById('toppings-form');
const crustForm = document.getElementById('crust-form');
const prepPizzaButton = document.getElementById('prep-pizza-button');
const pizzaOutput = document.getElementById('pizza-output');

prepPizzaButton.addEventListener('click', function() {
    // Get selected toppings
    const selectedToppings = [];
    const toppingsCheckboxes = toppingsForm.querySelectorAll('input[name="toppings"]');
    toppingsCheckboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
        selectedToppings.push(checkbox.value);
    }
    });

    // Get selected crust
    const selectedCrust = crustForm.querySelector('input[name="crust"]:checked').value;

    // Build output string
    let outputString = 'This pizza will have: ';
    selectedToppings.forEach(function(topping) {
    outputString += topping + ', ';
    });
    outputString += selectedCrust + ' crust.';

    // Display output
    const outputTextNode = document.createTextNode(outputString);
    pizzaOutput.innerHTML = '';
    pizzaOutput.appendChild(outputTextNode);
});