function handleForm(l){
    l.preventDefault()
    const name = document.getElementById('name').value
    const gender = document.getElementById('gender').value
    const age = Number(document.getElementById('age').value)
    console.log({name,age,gender})
    alert('welcome' + name)
}

// api

fetch('https://myapi.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
     },
body: JSON.stringify({name, age, gender})
.then(req  => req.json())
.then(data => console.log(data))
.catch(err => console.log(err))

} 


/* 
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "phone": "9546785675",
  "hasVisited": false,
  "address": "511 ne idontknow street",
  "fname": "jose",
  "lname": "garcia",
  "electronicReceipt": false,
  "vip": false,
  "email": "idontkonw@nose.net"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:5000/customer/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
*/