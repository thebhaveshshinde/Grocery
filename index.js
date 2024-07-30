// Window.onload
// {
//     navigator.geolocation.getCurrentPosition(success)
// }

// function success(position)
// {
//     alert("Thanks For Allowing location")
// }




function Check() {
    alert("Product Added Successfully")

}

var initial_increament = 0
var eventcount = 0

// Tomato
function AddtocartTomato() {

    eventcount++;

    if (eventcount > 1) {
        // document.getElementById('btn').onclick= null
        alert("Product Already Added to the cart")
        return
    }

    var main_div = document.createElement('div')
    main_div.className = "Boxes"
    main_div.id = "real"

    document.getElementById("initial").innerText = null

    var img = document.createElement('img')
    img.src = "./img/Tomato.webp"
    img.id = "cartimg"
    main_div.appendChild(img)

    var h2 = document.createElement('h2')
    h2.className = "Secondary"
    h2.innerText = "Tomato"
    main_div.appendChild(h2)

    var p = document.createElement("p")
    p.className = "Product_Desc"
    p.innerText = "(500g x 2) Tomato is a juicy, red fruit commonly used as a vegetable in cooking offering a sweet and tangy flavour."
    main_div.appendChild(p)

    var h1 = document.createElement("h1")
    h1.textContent = "Price: ₹ 55"
    main_div.appendChild(h1)

    var mini_div = document.createElement('div')
    mini_div.innerText = "Quantity:"

    var button = document.createElement("button")
    button.id = "increament"
    button.innerText = "+"
    mini_div.appendChild(button)

    var span = document.createElement("span")
    span.innerText = 0
    span.id = "value"
    mini_div.appendChild(span)

    var button = document.createElement("button")
    button.id = "decreament"
    button.innerText = "-"
    mini_div.appendChild(button)

    main_div.appendChild(mini_div)

    var div = document.createElement('div')
    div.id = "Final"
    main_div.appendChild(div)


    var button = document.createElement('button')
    button.className = "Removebtn"
    button.id = "rmv"
    button.innerText = "Remove Product"
    main_div.appendChild(button)

    document.getElementById("cart").appendChild(main_div)

    // eventcount ++ ;



    alert("Product Added Successfully . Check the Cart.")



    const removebutton = document.getElementById("rmv")
    const digvi = document.getElementById("real")



    document.getElementById('increament').addEventListener('click', function () {

        initial_increament++
        document.getElementById('value').textContent = initial_increament
        document.getElementById('Final').textContent = `Final Price: ${initial_increament * 55} `


    })

    document.getElementById('decreament').addEventListener('click', function () {

        if (initial_increament > 0) {
            initial_increament--
            document.getElementById('value').textContent = initial_increament
            document.getElementById('Final').textContent = ` Final Price: ${initial_increament * 55} `

        }
    })

    var bath = document.querySelectorAll('.Removebtn')
    bath.forEach((bath) => bath.addEventListener('click', function () {

        document.querySelectorAll('.Boxes').forEach((Box) => Box.innerHTML = null)
        document.querySelectorAll('.Boxes').forEach((Box) => Box.style = "display:none")
        eventcount = 0

    }))

}


var initial_increament1 = 0
var eventcount1 = 0

// Cabbage
function AddtocartCabbage() {

    eventcount1++;

    if (eventcount1 > 1) {
        // document.getElementById('btn').onclick= null
        alert("Product Already Added to the cart")
        return
    }

    var main_div1 = document.createElement('div')
    main_div1.className = "Boxes1"
    main_div1.id = "real1"

    document.getElementById("initial").innerText = null

    var img = document.createElement('img')
    img.src = "./img/Cabbage.webp"
    img.id = "cartimg1"
    main_div1.appendChild(img)

    var h2 = document.createElement('h2')
    h2.className = "Secondary"
    h2.innerText = "Cabbage"
    main_div1.appendChild(h2)

    var p = document.createElement("p")
    p.className = "Product_Desc"
    p.innerText = "1 piece-Product Description Approx: 450 - 650 g. Leafy, cruciferous vegetable with dense slightly peppery flavor."
    main_div1.appendChild(p)

    var h1 = document.createElement("h1")
    h1.textContent = "Price: ₹ 65"
    main_div1.appendChild(h1)

    var mini_div1 = document.createElement('div')
    mini_div1.innerText = "Quantity:"

    var button = document.createElement("button")
    button.id = "increament1"
    button.innerText = "+"
    mini_div1.appendChild(button)

    var span = document.createElement("span")
    span.innerText = 0
    span.id = "value1"
    mini_div1.appendChild(span)

    var button = document.createElement("button")
    button.id = "decreament1"
    button.innerText = "-"
    mini_div1.appendChild(button)

    main_div1.appendChild(mini_div1)

    var div = document.createElement('div')
    div.id = "Final1"
    main_div1.appendChild(div)


    var button = document.createElement('button')
    button.className = "Removebtn1"
    button.id = "rmv1"
    button.innerText = "Remove Product"
    main_div1.appendChild(button)

    document.getElementById("cart").appendChild(main_div1)

    // eventcount ++ ;



    alert("Product Added Successfully . Check the Cart.")





    document.getElementById('increament1').addEventListener('click', function () {

        initial_increament1++
        document.getElementById('value1').textContent = initial_increament1
        document.getElementById('Final1').textContent = `Final Price: ${initial_increament1 * 65} `


    })

    document.getElementById('decreament1').addEventListener('click', function () {

        if (initial_increament1 > 0) {
            initial_increament1--
            document.getElementById('value1').textContent = initial_increament1
            document.getElementById('Final1').textContent = ` Final Price: ${initial_increament1 * 65} `

        }
    })

    var bath1 = document.querySelectorAll('.Removebtn1')
    bath1.forEach((bath1) => bath1.addEventListener('click', function () {

        document.querySelectorAll('.Boxes1').forEach((Box1) => Box1.innerHTML = null)
        document.querySelectorAll('.Boxes1').forEach((Box1) => Box1.style = "display:none")
        eventcount1 = 0

        // document.getElementById('real').innerText="Cart is Empty.Please Select the Product."



    }))

}


var initial_increament2 = 0
var eventcount2 = 0

// Organic Onion
function AddtocartOnion() {

    eventcount2++;

    if (eventcount2 > 1) {
        // document.getElementById('btn').onclick= null
        alert("Product Already Added to the cart")
        return
    }

    var main_div2 = document.createElement('div')
    main_div2.className = "Boxes2"
    main_div2.id = "real2"

    document.getElementById("initial").innerText = null

    var img = document.createElement('img')
    img.src = "./img/Onion.webp"
    img.id = "cartimg1"
    main_div2.appendChild(img)

    var h2 = document.createElement('h2')
    h2.className = "Secondary"
    h2.innerText = "Organic Onion"
    main_div2.appendChild(h2)

    var p = document.createElement("p")
    p.className = "Product_Desc"
    p.innerText = "Staple in Indian food, with sharp flavour and fragrance.."
    main_div2.appendChild(p)

    var h1 = document.createElement("h1")
    h1.textContent = "Price: ₹ 105"
    main_div2.appendChild(h1)

    var mini_div2 = document.createElement('div')
    mini_div2.innerText = "Quantity:"

    var button = document.createElement("button")
    button.id = "increament2"
    button.innerText = "+"
    mini_div2.appendChild(button)

    var span = document.createElement("span")
    span.innerText = 0
    span.id = "value2"
    mini_div2.appendChild(span)

    var button = document.createElement("button")
    button.id = "decreament2"
    button.innerText = "-"
    mini_div2.appendChild(button)

    main_div2.appendChild(mini_div2)

    var div = document.createElement('div')
    div.id = "Final2"
    main_div2.appendChild(div)


    var button = document.createElement('button')
    button.className = "Removebtn2"
    button.id = "rmv2"
    button.innerText = "Remove Product"
    main_div2.appendChild(button)

    document.getElementById("cart").appendChild(main_div2)

    // eventcount ++ ;



    alert("Product Added Successfully . Check the Cart.")





    document.getElementById('increament2').addEventListener('click', function () {

        initial_increament2++
        document.getElementById('value2').textContent = initial_increament2
        document.getElementById('Final2').textContent = `Final Price: ${initial_increament2 * 105} `


    })

    document.getElementById('decreament2').addEventListener('click', function () {

        if (initial_increament2 > 0) {
            initial_increament2--
            document.getElementById('value2').textContent = initial_increament2
            document.getElementById('Final2').textContent = ` Final Price: ${initial_increament2 * 105} `

        }
    })

    var bath2 = document.querySelectorAll('.Removebtn2')
    bath2.forEach((bath2) => bath2.addEventListener('click', function () {

        document.querySelectorAll('.Boxes2').forEach((Box2) => Box2.innerHTML = null)
        document.querySelectorAll('.Boxes2').forEach((Box2) => Box2.style = "display:none")
        eventcount2 = 0

        // document.getElementById('real').innerText="Cart is Empty.Please Select the Product."



    }))

}




var initial_increament3 = 0
var eventcount3 = 0

// Milk
function AddtocartMilk() {

    eventcount3++;

    if (eventcount3 > 1) {
        // document.getElementById('btn').onclick= null
        alert("Product Already Added to the cart")
        return
    }

    var main_div3 = document.createElement('div')
    main_div3.className = "Boxes3"
    main_div3.id = "real3"

    document.getElementById("initial").innerText = null

    var img = document.createElement('img')
    img.src = "./img/Milk.jpg"
    img.id = "cartimg3"
    main_div3.appendChild(img)

    var h2 = document.createElement('h2')
    h2.className = "Secondary"
    h2.innerText = "Milk"
    main_div3.appendChild(h2)

    var p = document.createElement("p")
    p.className = "Product_Desc"
    p.innerText = "Product Description 200gm commonly used as a vegetable in cooking , offering a sweet and tangy flavour"
    main_div3.appendChild(p)

    var h1 = document.createElement("h1")
    h1.textContent = "Price: ₹ 85"
    main_div3.appendChild(h1)

    var mini_div3 = document.createElement('div')
    mini_div3.innerText = "Quantity:"

    var button = document.createElement("button")
    button.id = "increament3"
    button.innerText = "+"
    mini_div3.appendChild(button)

    var span = document.createElement("span")
    span.innerText = 0
    span.id = "value3"
    mini_div3.appendChild(span)

    var button = document.createElement("button")
    button.id = "decreament3"
    button.innerText = "-"
    mini_div3.appendChild(button)

    main_div3.appendChild(mini_div3)

    var div = document.createElement('div')
    div.id = "Final3"
    main_div3.appendChild(div)


    var button = document.createElement('button')
    button.className = "Removebtn3"
    button.id = "rmv3"
    button.innerText = "Remove Product"
    main_div3.appendChild(button)

    document.getElementById("cart").appendChild(main_div3)

    // eventcount ++ ;



    alert("Product Added Successfully . Check the Cart.")





    document.getElementById('increament3').addEventListener('click', function () {

        initial_increament3++
        document.getElementById('value3').textContent = initial_increament3
        document.getElementById('Final3').textContent = `Final Price: ${initial_increament3 * 85} `


    })

    document.getElementById('decreament3').addEventListener('click', function () {

        if (initial_increament3 > 0) {
            initial_increament3--
            document.getElementById('value3').textContent = initial_increament2
            document.getElementById('Final3').textContent = ` Final Price: ${initial_increament3 * 85} `

        }
    })

    var bath3 = document.querySelectorAll('.Removebtn3')
    bath3.forEach((bath3) => bath3.addEventListener('click', function () {

        document.querySelectorAll('.Boxes3').forEach((Box3) => Box3.innerHTML = null)
        document.querySelectorAll('.Boxes3').forEach((Box3) => Box3.style = "display:none")
        eventcount3 = 0

        // document.getElementById('real').innerText="Cart is Empty.Please Select the Product."



    }))

}

var initial_increament4 = 0
var eventcount4 = 0

// Panner
function AddtocartPanner() {

    eventcount4++;

    if (eventcount4 > 1) {
        // document.getElementById('btn').onclick= null
        alert("Product Already Added to the cart")
        return
    }

    var main_div4 = document.createElement('div')
    main_div4.className = "Boxes4"
    main_div4.id = "real4"

    document.getElementById("initial").innerText = null

    var img = document.createElement('img')
    img.src = "./img/Panner.jpg"
    img.id = "cartimg4"
    main_div4.appendChild(img)

    var h2 = document.createElement('h2')
    h2.className = "Secondary"
    h2.innerText = "Panner"
    main_div4.appendChild(h2)

    var p = document.createElement("p")
    p.className = "Product_Desc"
    p.innerText = "Product Description 200gm commonly used as a vegetable in cooking , offering a sweet and tangy flavour"
    main_div4.appendChild(p)

    var h1 = document.createElement("h1")
    h1.textContent = "Price: ₹ 250"
    main_div4.appendChild(h1)

    var mini_div4 = document.createElement('div')
    mini_div4.innerText = "Quantity:"

    var button = document.createElement("button")
    button.id = "increament4"
    button.innerText = "+"
    mini_div4.appendChild(button)

    var span = document.createElement("span")
    span.innerText = 0
    span.id = "value4"
    mini_div4.appendChild(span)

    var button = document.createElement("button")
    button.id = "decreament4"
    button.innerText = "-"
    mini_div4.appendChild(button)

    main_div4.appendChild(mini_div4)

    var div = document.createElement('div')
    div.id = "Final4"
    main_div4.appendChild(div)


    var button = document.createElement('button')
    button.className = "Removebtn4"
    button.id = "rmv4"
    button.innerText = "Remove Product"
    main_div4.appendChild(button)

    document.getElementById("cart").appendChild(main_div4)

    // eventcount ++ ;



    alert("Product Added Successfully . Check the Cart.")





    document.getElementById('increament4').addEventListener('click', function () {

        initial_increament4++
        document.getElementById('value4').textContent = initial_increament4
        document.getElementById('Final4').textContent = `Final Price: ${initial_increament4 * 250} `


    })

    document.getElementById('decreament4').addEventListener('click', function () {

        if (initial_increament4 > 0) {
            initial_increament4--
            document.getElementById('value4').textContent = initial_increament4
            document.getElementById('Final4').textContent = ` Final Price: ${initial_increament4 * 250} `

        }
    })

    var bath4 = document.querySelectorAll('.Removebtn4')
    bath4.forEach((bath4) => bath4.addEventListener('click', function () {

        document.querySelectorAll('.Boxes4').forEach((Box4) => Box4.innerHTML = null)
        document.querySelectorAll('.Boxes4').forEach((Box4) => Box4.style = "display:none")
        eventcount4 = 0

        // document.getElementById('real').innerText="Cart is Empty.Please Select the Product."



    }))

}


var initial_increament5 = 0
var eventcount5 = 0

// Potato
function AddtocartPotato() {

    eventcount5++;

    if (eventcount5 > 1) {
        // document.getElementById('btn').onclick= null
        alert("Product Already Added to the cart")
        return
    }

    var main_div5 = document.createElement('div')
    main_div5.className = "Boxes5"
    main_div5.id = "real5"

    document.getElementById("initial").innerText = null

    var img = document.createElement('img')
    img.src = "./img/Potato.webp"
    img.id = "cartimg5"
    main_div5.appendChild(img)

    var h2 = document.createElement('h2')
    h2.className = "Secondary"
    h2.innerText = "Potato"
    main_div5.appendChild(h2)

    var p = document.createElement("p")
    p.className = "Product_Desc"
    p.innerText = "Product Description 200gm commonly used as a vegetable in cooking , offering a sweet and tangy flavour"
    main_div5.appendChild(p)

    var h1 = document.createElement("h1")
    h1.textContent = "Price: ₹ 115"
    main_div5.appendChild(h1)

    var mini_div5 = document.createElement('div')
    mini_div5.innerText = "Quantity:"

    var button = document.createElement("button")
    button.id = "increament5"
    button.innerText = "+"
    mini_div5.appendChild(button)

    var span = document.createElement("span")
    span.innerText = 0
    span.id = "value5"
    mini_div5.appendChild(span)

    var button = document.createElement("button")
    button.id = "decreament5"
    button.innerText = "-"
    mini_div5.appendChild(button)

    main_div5.appendChild(mini_div5)

    var div = document.createElement('div')
    div.id = "Final5"
    main_div5.appendChild(div)


    var button = document.createElement('button')
    button.className = "Removebtn5"
    button.id = "rmv5"
    button.innerText = "Remove Product"
    main_div5.appendChild(button)

    document.getElementById("cart").appendChild(main_div5)

    // eventcount ++ ;



    alert("Product Added Successfully . Check the Cart.")





    document.getElementById('increament5').addEventListener('click', function () {

        initial_increament5++
        document.getElementById('value5').textContent = initial_increament5
        document.getElementById('Final5').textContent = `Final Price: ${initial_increament5 * 115} `


    })

    document.getElementById('decreament5').addEventListener('click', function () {

        if (initial_increament5 > 0) {
            initial_increament5--
            document.getElementById('value5').textContent = initial_increament5
            document.getElementById('Final5').textContent = ` Final Price: ${initial_increament5 * 115} `

        }
    })

    var bath5 = document.querySelectorAll('.Removebtn5')
    bath5.forEach((bath5) => bath5.addEventListener('click', function () {

        document.querySelectorAll('.Boxes5').forEach((Box5) => Box5.innerHTML = null)
        document.querySelectorAll('.Boxes5').forEach((Box5) => Box5.style = "display:none")
        eventcount5 = 0
        
        // document.getElementById('real').innerText="Cart is Empty.Please Select the Product."



    }))

}

































document.getElementById('form_container').addEventListener('submit', function (event) { event.preventDefault() })

function Submit() {
    const Name = document.getElementById('username')
    const Name1 = username.value
    const pass = document.getElementById('password')
    const pass1 = pass.value

    if (Name1.trim() === '' || pass1.trim() === '') {
        alert("Input Field is Empty.Please Enter the values")
    }
    else {
        alert("Welcome" + " " + Name1 + " " + "you are" + "Successfully Signed in")
    }

    Name.value = ""
    pass.value = ""

}

// function Getlocation()
// {
//     navigator.geolocation.getCurrentPosition(SuccessfullCallBack , FailureCallBack)
// }

// function SuccessfullCallBack(position)
// {
//     document.getElementById('cart').textContent="Latitude:" + position.coords.latitude + "\n" + "Longitude:" + position.coords.longitude + ".We are currently not accepting order from this location"
// }

// function FailureCallBack(error)
// {
//     document.getElementById('cart').textContent="Error to Fetch Location:" + error.code + "Allow access to your Device Location"
// }

