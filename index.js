// XMLHttpRequest => is an object in our browser => for AJAX calls
var XMLHttpRequest = require('xhr2')

// Step 1: Instantiate this Object
var req = new XMLHttpRequest();
req.addEventListener("load", reqListener)

// Step 2: 
req.open("GET", "https://www.google.com/search?q=test");

// Step 3: send()
req.send();