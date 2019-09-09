class GitHub{
    constructor(){
        this.clientId = 'd75f1fe49c2a433973b0';
        this.clientSecret = '113321b5a035b4f5b2f5607b6ddbe9ecb2b16721';
        this.reposCount=5;
        this.reposSortBy = 'created: asc'
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const profileData = await profileResponse.json();
       
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&
        sort=${this.reposSortBy}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        
        const repoData = await repoResponse.json();
       
        return {
            profile:profileData,
            repos:repoData
        }
    }


}