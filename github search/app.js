const github = new GitHub();
const ui = new Ui();

const searchUser = document.getElementById('search-user').addEventListener('keyup',(e) =>{

    const userText = e.target.value;
    
    if(userText !== ""){
        github.getUser(userText).then(data =>{

            if(data.profile.message ==='Not Found'){
                ui.showAlert('Not Found','alert alert-danger')
            }else{
                ui.clearAlert();
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
            
            }
        )
        .catch(e => console.log(e));
    }else{
        // clear profile
        ui.clearProfile();
    }

});