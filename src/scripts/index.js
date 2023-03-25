import { getUser } from "./services/user.js";
import { getRepos } from "./services/repositories.js";
import { user } from "./objects/user.js";
import { screen } from "./objects/screen.js";

function validateEmptyInput(userName){
    if(userName.length === 0){
        alert('Preencha o campo com o nome do usuário do Github!')
        return true
   }
}


document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if (validateEmptyInput(userName)) {
        return
    }
    getUserData(userName)
    
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    console.log(e)

    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    

    if(isEnterKeyPressed){
        if (validateEmptyInput(userName)) return
        getUserData(userName)
    }
   
})


async function getUserData(userName){

    const userReponse = await getUser(userName)

    if(userReponse.message === "Not Found"){
        screen.renderNotFound()
        return
    }
    
    const repositorResponse = await getRepos(userName)
    user.setInfo(userReponse)
    user.setRepos(repositorResponse)
    console.log(user)
    screen.renderUser(user)
    


// user.repositories(repositories)





//     getUser(userName).then(userData => {
// //avatar url
// // bio
// // name 
//         console.log(userData)
//         let userInfo = `
//         <div class = "info">
//             <img src="${userData.avatar_url}" alt="Foto do Perfil"/>
//             <div class="data">
//                 <h1>${userData.name ?? 'Não possui nome cadastrado 😥 ' }</h1>
//                 <p>${userData.bio ?? 'Não possui bio cadastrada 😓' }</p>
//                 <ul>
//                     <li><a href="${userData.html_url}" target="_blank">Perfil</a></li>
//                 </ul>
//             </div>
//         </div>
//         `

//         document.querySelector('.profile-data').innerHTML = userInfo;

//         getUserRepositories(userName)
//    })


    
}

// function getUserRepositories(userName){

//     getRepos(userName).then(reposData => {
//         console.log(reposData)
//     let repositoriesItens = ""
//     reposData.forEach(repo =>{
//         repositoriesItens += `<li><a target = "_blank" href = "${repo.html_url}">${repo.name}</a></li>`
//     } )
    
//     document.querySelector('.profile-data').innerHTML += 
//     `
//     <div class="repositories section">
//         <h2>Repositórios</h2>
//         <ul>${repositoriesItens}</ul>
//     </div>

//     `

//     } )
// }



