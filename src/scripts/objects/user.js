const user = {
    avatarUrl:'',
    name:'',
    bio:'',
    userName:'',
    userLink:'',
    repositories: [],

    setInfo(gitHubUser){
        this.avatarUrl =  gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.userLink = gitHubUser.html_url
    },

    setRepos(repositories){
        this.repositories = repositories
    }
}

export { user }