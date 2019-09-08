const easyHttp = new EasyHttp();

//all posts

// easyHttp.get('https://jsonplaceholder.typicode.com/posts',function(error,response){
    
//     if(error)
//         console.log(error);
//     else
//         console.log(response);
// });

//single post

// easyHttp.get('https://jsonplaceholder.typicode.com/posts/1',function(error,response){
    
//     if(error)
//         console.log(error);
//     else
//         console.log(response);
// });

//post  a data

// const data = {
//     title:'customPost',
//     body:'this is custom post'
// }

// easyHttp.post('https://jsonplaceholder.typicode.com/posts',data,function(error,response){
    
//     if(error)
//         console.log(error);
//     else
//         console.log(response);
// });

// update a post by id

// const data = {
//     title:'customPost',
//     body:'this is custom post'
// }

// easyHttp.put('https://jsonplaceholder.typicode.com/posts/1',data,function(error,response){
    
//     if(error)
//         console.log(error);
//     else
//         console.log(response);
// });



easyHttp.delete('https://jsonplaceholder.typicode.com/posts/1',function(error,response){
    
    if(error)
        console.log(error);
    else
        console.log(response);
});
