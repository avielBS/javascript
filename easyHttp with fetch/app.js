const easyHttp = new EasyHttp();

easyHttp.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err));

var user = {
    name:'title',
    username:'some',
    email:'nan@na.com'
}

easyHttp.post('https://jsonplaceholder.typicode.com/users',user)
.then(data => console.log(data))
.catch(err => console.log(err));

easyHttp.put('https://jsonplaceholder.typicode.com/users/1',user)
.then(data => console.log(data))
.catch(err => console.log(err));

easyHttp.delete('https://jsonplaceholder.typicode.com/users/1')
.then(data => console.log(data))
.catch(err => console.log(err));