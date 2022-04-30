
import { navbar } from "../components/navbar.js";
let n = document.getElementById('navbar')
n.innerHTML = navbar()

import { searchimages, append } from "../components/fetch.js"


let search = (e) => {
    if (e.key === "Enter") {
        let value = document.getElementById("query").value;
        searchimages(value).then((data) => {
            console.log(data)
            let container = document.getElementById("container")
            container.innerHTML=null
            append(data.results, container)
        })

    }
}

document.getElementById("query").addEventListener("keydown", search)

// -----------sort by category----------
let categories=document.getElementById("category").children

function csearch(){
    console.log(this.id)
    searchimages(this.id).then((data) => {
        console.log(data)
        let container = document.getElementById("container")
        container.innerHTML=null
        append(data.results, container)
    })
}

for(let el of categories){
    el.addEventListener("click",csearch)
}


// ---------sort----------

let sort=document.getElementById("select")
sort.addEventListener("change",csort)

function csort(){
    console.log(this.value)
    searchimages(this.value).then((data) => {
        console.log(data)
        let container = document.getElementById("container")
        container.innerHTML=null
        append(data.results, container)
    })
}

// ---------filter----------

let filter=document.getElementById("filter")
filter.addEventListener("change",cfilter)

function cfilter(){
    console.log(this.value)
    searchimages(this.value).then((data) => {
        console.log(data)
        let container = document.getElementById("container")
        container.innerHTML=null
        append(data.results, container)
    })
}

// let searchimages = async () => {
//     let value = document.getElementById("query").value;
//     try {
//         let res = await fetch(
//             `https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=ynk04htaILjkNjpvrd6sMo5bwOiyYDaqJec0Kv0evDI`)

//         let data = await res.json()
//         console.log(data)

//     } catch (err) {
//         console.log(err)
//     }
// }

