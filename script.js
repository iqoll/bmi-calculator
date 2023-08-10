const calculateBtn = document.getElementById('calculateBtn')
const bmiResult = document.getElementById('bmiResult')
const classification = document.getElementById('classification')
const error = document.querySelector('.error')

const calculateBMI = () => {
  const weight = parseFloat(document.getElementById('weight').value)
  const height = parseFloat(document.getElementById('height').value)

  // Input validation
  if(isNaN(weight)) {
    error.textContent = 'Please enter a valid number for the weight input fields'
  }  
  if(isNaN(height)) {
    error.textContent = 'Please enter a valid number for the height input fields'
  }

  // Check if there is an error message
  if (error.textContent !== '') {
    setTimeout(() => {
      error.textContent = ''
    }, 3000)
  }
   
    if(weight < 0 || height < 0) {
      alert('Please enter a valid number for the calculation')
    } else {

  const bmi = weight / (height * height)
  console.log(bmi.toFixed(2))
  
  let classification2;
  
  switch (true) {
    case bmi < 18.5:
      classification2 = 'Underweight'
      break;
    case bmi >= 18.5 && bmi <= 25:
      classification2 = 'Normal'
      break;
    case bmi > 25 && bmi <= 30:
      classification2 = 'Overweight'
      break;
    case bmi > 30:
      classification2 = 'Obese'
      break;
  }
  
 bmiResult.textContent = ` ${bmi.toFixed(2)} kg/m`
 classification.textContent = `${classification2}`
}
}

calculateBtn.addEventListener('click', calculateBMI)