const calculateBtn = document.getElementById('calculateBtn')
const bmiResult = document.getElementById('bmiResult')
const classification = document.getElementById('classification')

const calculateBMI = () => {
  const weight = parseFloat(document.getElementById('weight').value)
  const height = parseFloat(document.getElementById('height').value)

  if(isNaN(weight) || isNaN(height)) {
    alert('Please enter your weight & height!')
  }

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

calculateBtn.addEventListener('click', calculateBMI)