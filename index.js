
function Check() {
    alert("Product Added Successfully")

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

function Getlocation()
{
    navigator.geolocation.getCurrentPosition(SuccessfullCallBack , FailureCallBack)
}

function SuccessfullCallBack(position)
{
    document.getElementById('cart').textContent="Latitude:" + position.coords.latitude + "\n" + "Longitude:" + position.coords.longitude + ".We are currently not accepting order from this location"
}

function FailureCallBack(error)
{
    document.getElementById('cart').textContent="Error to Fetch Location:" + error.code + "Allow access to your Device Location"
}

