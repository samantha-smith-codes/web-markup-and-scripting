// JavaScript code for form validation

// Prevent form from submitting
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault()

  // Retrieve the input field value
  let inputValue = document.getElementById("inputField").value.trim()

  // Regular expression patter for alphanumeric input 
  let alphaNumPattern = /^[a-zA-Z0-9]+$/

  // Check if the input value matches the pattern 
  if (alphaNumPattern.test(inputValue)) {

    // Valid input: display confirmation and submit the form
    alert("Form submitted successfully!")
    console.log("Form submitted with value: " + inputValue)
    this.reset()

  } else {

    // Invalid input: display error message
    alert("Invalid input! Please enter only letters and numbers.")
    document.getElementById("inputField").focus()
  }
})
