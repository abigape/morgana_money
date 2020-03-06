
// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============
//

const monday_hours = document.getElementById("mon_hrs");
const monday_mins = document.getElementById("mon_mins");

const tuesday_hours = document.getElementById("tue_hrs");
const tuesday_mins = document.getElementById("tue_mins");

const wednesday_hours = document.getElementById("wed_hrs");
const wednesday_mins = document.getElementById("wed_mins");

const thursday_hours = document.getElementById("thu_hrs");
const thursday_mins = document.getElementById("thu_mins");

const friday_hours = document.getElementById("fri_hrs");
const friday_mins = document.getElementById("fri_mins");

const button = document.getElementById('BUTTON')
const result = document.getElementById('hours_result')

const per_hour = document.getElementById('euro_per_hour')
const money_result = document.getElementById('money_result')

button.addEventListener('click', e => {
    if (e.target.matches('button')) {
        // Calc min total
        var minutes_total = parseInt(monday_mins.value) + parseInt(tuesday_mins.value) + parseInt(wednesday_mins.value) + parseInt(thursday_mins.value) + parseInt(friday_mins.value)
        
        // Calc hr total
        var hours_total = parseInt(monday_hours.value) + parseInt(tuesday_hours.value) + parseInt(wednesday_hours.value) + parseInt(thursday_hours.value) + parseInt(friday_hours.value)

        // Add any extra hours
        while(minutes_total >= 60) {
            minutes_total -= 60
            hours_total += 1
        }

        // Calculate pay
        var total_pay = (hours_total + (minutes_total/60)) * parseInt(per_hour.textContent)
        
        console.log(minutes_total)
        console.log(hours_total)
        console.log(total_pay)
        console.log(parseInt(per_hour.textContent))

        
        // Display time result
        result.innerHTML = "Total: " + hours_total + " hrs " + minutes_total + " mins" 
        
        // Display money result
        money_result.innerHTML = "(" + total_pay + " Euros)"
    }
})




/*
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')
var last_key_was_op = false

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent

        // Numbers
        if (!action) {
            console.log('number key!')
            // Handle 0 case
            if(displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent
            } else {
                display.textContent = displayedNum + keyContent
            }
        }

        // Remove .is-depressed class from all keys
        if(last_key_was_op) {
            Array.from(key.parentNode.children)
                .forEach(k => k.classList.remove('is-depressed'))
            last_key_was_op = false
        }
        // Operators
        if (action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide') {
            console.log('operator key!')
            key.classList.add('is-depressed')
            last_key_was_op = true
            // Add custom attribute
            calculator.dataset.previousKeyType = 'operator'
        }
        if (action === 'decimal') {
            console.log('decimal key!')
            display.textContent = displayedNum + '.'
        }
        if (action === 'clear') {
            console.log('clear key!')
        }
        if (action === 'calculate') {
            console.log('equal key!')
        }

    }
})
*/