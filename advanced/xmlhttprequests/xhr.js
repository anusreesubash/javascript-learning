const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const sendHttpRequest = (method, url, data) => {
	const promise = new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open(method, url);

		xhr.responseType = 'json'

		xhr.setRequestHeader('Content-Type', 'application/json');

		xhr.onload = () => {
		 resolve(xhr.response);
		};

		xhr.send(JSON.stringify(data));

	});
	return promise;
};

const getData = function () {
	sendHttpRequest('GET', 'https://reqres.in/api/users').then(responseData => {
		console.log(responseData);
	});
};

const postData = function () {
	sendHttpRequest('POST', 'https://reqres.in/api/register', 
		{"email": "eve.holt@reqres.in",
		"password": "pistol"
	 });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', postData);
