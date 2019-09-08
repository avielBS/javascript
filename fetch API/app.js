document.getElementById('get-text').addEventListener('click',getText);

function getText(){
    fetch('test.txt')
    .then(function(res){
        return res.text();
    }
    ).then(function(data){
        console.log(data);
        document.getElementById('output').innerHTML=data;
    }).catch(function(err){
        console.log(err)
    })
}

document.getElementById('get-json').addEventListener('click',getJson);

function getJson(){

    fetch('post.json')
    .then(function (res){
        return res.json();
    })
    .then(function(data){

        let output = '';

        data.forEach(function(post){
            output+=`<li>
                ${post.title}
            </li>`
        })
        document.getElementById('output').innerHTML=output;
    }).catch(function(err){
        console.log(err);
    });

}

document.getElementById('get-api-data').addEventListener('click',getAPIData);

function getAPIData(){

    fetch('https://api.github.com/users')
    .then(function(res){
        return res.json();
    }).then(function(users){

        let output = '';

        users.forEach(function(user){
            output += `<li>${user.login}</li>`
        })
        document.getElementById('output').innerHTML=output;
    }).catch(function(err){
        console.log(err);
    })

}