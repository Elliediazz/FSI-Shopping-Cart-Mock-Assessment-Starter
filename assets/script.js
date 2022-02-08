//click the plus and minus buttons
    //find the buttons in html done
let plus = document.querySelector('#quantity-up')
let minus = document.querySelector('#quantity-down')
let num = 1
//click the plus and minus buttons

//get quantity
let quant = document.querySelector('.total-quantity')
console.log(quant.textContent)
//increase it by 1
plus.addEventListener('click', function(){
    num++
    console.log('plus button clicked')
    console.log(num)
    quant.textContent = `Quantity: ${num}`

})

//same for - button


// cant drop below 0 (use is statement)

    minus.addEventListener('click', function(){
        console.log('minus button clicked')
        if (num <= 0) {num = 0} else {
            num--
            console.log(num)
        quant.textContent = `Quantity: ${num}`
        }
    })

     

//display a new quantity for - and + buttons