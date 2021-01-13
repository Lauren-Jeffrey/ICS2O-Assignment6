document.getElementById('price').addEventListener('click', myfunction)
function myfunction () {
  let size = document.getElementById('pizzasize').value
  if (size === 'Large') {
    size = 6.00
  } else if (size === 'Extra Large') {
    size = 10.00
  }
  let topping = document.getElementById('toppingnum').value
  if (topping === '1') {
    topping = 1.00
  } else if (topping === '2') {
    topping = 1.75
  } else if (topping === '3') {
    topping = 2.50
  } else if (topping === '4') {
    topping = 3.35
  }
  const total = size + topping
  const cost = total * 1.13
  alert('The total cost (with taxes) is $' + cost)
}
