# Projects related to DOM

## project link
https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js

# solution code 

## project 1

```JAVASCRIPT 
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button) {
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey' ){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white' ){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue' ){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow' ){
      body.style.backgroundColor = e.target.id;
    }
  })
});

```

## project 2 

```JAVASCRIPT
const form = document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)

  const weight = parseInt(document.querySelector('#weight').value)

  const results = document.querySelector('#results')

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  }
  else  if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight';
  }
  else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    //show the result
    // results.innerHTML = `<span>${bmi}</span>`

    if(bmi<18.6){
      results.innerHTML = `Under weight <br>BMI : ${bmi}`
    }
    if(18.6<bmi<24.9){
       results.innerHTML = `Normal Range <br>BMI : ${bmi}`
    }
    if (bmi>24.9){
       results.innerHTML = `Over Weight <br>BMI : ${bmi}`
    }
  }
});

```