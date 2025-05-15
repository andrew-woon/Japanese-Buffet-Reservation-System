const inputFields = document.querySelectorAll('input[required]');
const errorMessages = document.querySelectorAll('.error');

inputFields.forEach(function(input) {
	input.style.border = '1px solid #ccc';
	input.style.padding = '5px';
	input.style.marginBottom = '10px';
});

errorMessages.forEach(function(error) {
	error.style.color = 'red';
	error.style.fontSize = '0.8em';
	error.style.display = 'block';
	error.style.marginTop = '5px';
});
// Validate form fields
document.getElementById('payment-form').addEventListener('submit', function(event) {
	// Clear previous error messages
	document.querySelectorAll('.error').forEach(function(error) {
		error.textContent = '';
	});

	// Get form field values
	const name = document.getElementById('name').value;
	const card_number = document.getElementById('card_number').value;
	const expiry_date = document.getElementById('expiry_date').value;
	const cvv = document.getElementById('cvv').value;

	// Validate name
  if (name.length < 2) {
    document.getElementById('name-error').textContent = 'Name must be at least 2 characters long.';
    event.preventDefault();
  }

  // Validate card number
  const card_number_regex = /^(\d{4}\s?){3}\d{4}$/;
	if (!card_number_regex.test(card_number)) {
		document.getElementById('card_number-error').textContent = 'Invalid credit card number. Card number must be in the format "XXXX XXXX XXXX XXXX".';
		event.preventDefault();
	}

  // Validate expiry date
  const expiry_date_regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  if (!expiry_date_regex.test(expiry_date)) {
    document.getElementById('expiry_date-error').textContent = 'Expiry date must be in the format MM/YY.';
    event.preventDefault();
  }

  // Validate CVV
  const cvv_regex = /^\d{3}$/;
  if (!cvv_regex.test(cvv)) {
    document.getElementById('cvv-error').textContent = 'CVV must be 3 digits long.';
    event.preventDefault();
  }
});

// Select the CVV input field
  const cvvInput = document.querySelector('.cvv-input');

  // Add an event listener for the blur event
  cvvInput.addEventListener('blur', () => {
    // Change the type attribute to password
    cvvInput.type = 'password';
  });
  
const cardNumberInput = document.querySelector('#card_number');

// Add an event listener for the input event
cardNumberInput.addEventListener('input', () => {
  // Get the current value of the input field
  const inputValue = cardNumberInput.value;

  // Format the value by adding a space after every 4 digits
  const formattedValue = inputValue.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');

  // Set the formatted value as the value of the input field
  cardNumberInput.value = formattedValue.substring(0, 19);
});

function validateExpiryDate() {
	const expiry_date = document.getElementById('expiry_date').value;
	const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;

	if (!regex.test(expiry_date)) {
		document.getElementById('expiry_date-error').textContent = 'Expiry date must be in the format MM/YY.';
		return false;
	}

	document.getElementById('expiry_date-error').textContent = '';
	return true;
}