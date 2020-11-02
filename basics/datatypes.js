var a = 16; //number
var b = "Anusree"; //string
var c = true; //boolean
var x = {"name": "anusree", 
	"age": 25, 
	"address": {
		"city": "bangalore",
		"state": "karnataka"
	}
}; //object

x.name = "anoop"
x['name'] = "anoop"
x.address.state = "kerala"
x['address']['city'] = "thrissur"
x.address = {
	"city": "blr",
	"state": "karnataka"
}

console.log(x)
