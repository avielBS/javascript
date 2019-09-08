class EasyHttp{
    constructor(){
        this.http = new XMLHttpRequest();
    }

    get(url ,callback){
        this.http.open('get',url,true);

        let self = this;
        this.http.onload = function(){
            if(self.http.status === 200){
                callback(null,self.http.responseText);
            }else
                callback(`ERROR : ${self.http.status}`)
        }
        this.http.send();
    }

    post(url,data,callback){
        
        this.http.open('post',url,true);
        this.http.setRequestHeader('content-type','application/json');
      
        let self= this;
        this.http.onload = function(){
            callback(null,self.http.responseText); 
        }


        this.http.send(JSON.stringify(data));
    }
    
    put(url,data,callback){

        this.http.open('put',url,true);
        this.http.setRequestHeader('content-type','application/json');

        let self = this;
        this.http.onload = function(){
            callback(null,self.http.responseText);
        }

        this.http.send(JSON.stringify(data));
    }


    delete(url,callback){
        this.http.open('delete',url,true);
        
        let self = this;
        this.http.onload = function(){
            if(self.http.status === 200)
                callback(null,self.http.responseText);
            else
                callback(`ERROR : ${self.http.status}`)

        }
        
        this.http.send();
    }

}