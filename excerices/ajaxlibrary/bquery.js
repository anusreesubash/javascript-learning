window.bquery = {
	ajax: function(options){
		const method = options.method;
		const url = options.url;
		const xhr = new XMLHttpRequest();

		xhr.open(method, url);

		xhr.responseType = 'json';

		xhr.onload = () => {
		 // console.log(xhr.response);
		 options.success(xhr.response);
		};

		xhr.send();

	}
}