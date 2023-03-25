import { baseURL, repositoriesQuantity } from "../variables.js";

async function getRepos(userName){
    const response = await fetch(`${baseURL}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return await response.json()
}

export {getRepos}