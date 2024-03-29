class Ui{
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3 ">
            <div class='row'>
                <div class = "col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}"></img>
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
                </div>
                <div class = "col-md-9">
                    <span class="badge badge-primary">Pablic Repos : ${user.public_repos}</span>
                    <span class="badge badge-secondary">Pablic Gists : ${user.public_gists}</span>
                    <span class="badge badge-primary">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Follow : ${user.following}</span>

                    <br><br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company : ${user.company}</li>
                        <li class="list-group-item">Blog/Website : ${user.blog}</li>
                        <li class="list-group-item">location : ${user.location}</li>
                        <li class="list-group-item">Member Since : ${user.created_at}</li>

                    </u>
                
                </div>
                <div class = "col-md-9">
                
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Reops</h3>
        <div id="repos"><div>
        `

    }

    showRepos(repos){

        let output = '';

        repos.forEach(function(repo){
            output += 
            `
            <div class="card card-body mb-2">
                <div class='row'>
                    <div class="col-md-6">
                        <a href "${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>

                    <div class="col-md-6">
                        <span class="badge badge-primary">Stars : ${repo.stargazer_count}</span>
                        <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-primary">Forks: ${repo.forks_count}</span>
                    </div>

                </div>
            </div>
            `
            ;
        });

        document.getElementById("repos").innerHTML = output;
        
    }

    clearProfile(){
        this.profile.innerHTML='';
        this.clearAlert();
    }

    showAlert(msg,className){
        this.clearAlert();
        const div = document.createElement('div')
        div.className = className;
        div.appendChild(document.createTextNode(msg));
        const container = document.querySelector('.searchContainer');
        const search = document.getElementById('.search');
        container.insertBefore(div,search);

        setTimeout(()=>{
            this.clearAlert();
        },2000)
    }
    clearAlert(){
        console.log('clear')

        const alert = document.querySelector('.alert');
        if(alert) 
            alert.remove()
    }




}