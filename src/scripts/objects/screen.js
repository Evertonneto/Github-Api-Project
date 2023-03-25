const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `
        <div class = "info">
            <img src="${user.avatarUrl}" alt="Foto do Perfil"/>
            <div class="data">
                      <h1>${user.name ?? 'Não possui nome cadastrado 😥 ' }</h1>
                      <p>${user.bio ?? 'Não possui bio cadastrada 😓' }</p>
                     <ul>
                             <li><a href="${user.userLink}" target="_blank">Perfil</a></li>
                     </ul>
            </div>
        </div>
    `
    
    let repositoriesItens = ''

    user.repositories.forEach(repo => {
        repositoriesItens += `<li><a href="${repo.html_url}">${repo.name}</a></li>` } )

    console.log(repositoriesItens)

    if(user.repositories.length > 0){
        this.userProfile.innerHTML += `
            <div class="repositories section">
                 <h2>Repositórios</h2>
                <ul>${repositoriesItens}</ul>
           </div>
        
        `
    }

    },

    renderNotFound(){
        this.userProfile.innerHTML= "<h3>Usuário Não Encontrado </h3>"
    }
}

export {screen}