const easyHttp = new EasyHttp();

// easyHttp.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));

// var user = {
//     name:'title',
//     username:'some',
//     email:'nan@na.com'
// }

// easyHttp.post('https://jsonplaceholder.typicode.com/users',user)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// easyHttp.put('https://jsonplaceholder.typicode.com/users/1',user)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// easyHttp.delete('https://jsonplaceholder.typicode.com/users/1')
// .then(data => console.log(data))
// .catch(err => console.log(err));




function put(){

    const xhr = new XMLHttpRequest();

    xhr.open('post','http://www.dneonline.com/calculator.asmx',true);
    xhr.setRequestHeader('Content-Type', 'text/xml');
    xhr.setRequestHeader('SOAPAction','http://tempuri.org/Add');   
    xhr.setRequestHeader('Access-Control-Allow-Origin','*');   


    const self=this;
    xhr.onload = function (){
        console.log(self.http.responseText,'here');
    }

    xhr.send(`<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <Add xmlns="http://tempuri.org/">
          <intA>1</intA>
          <intB>2</intB>
        </Add>
      </soap:Body>
    </soap:Envelope>`);

}

put();

