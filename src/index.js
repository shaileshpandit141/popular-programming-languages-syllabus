import Data from './Roadmaps/App/Data.js'
import SyllabusCard from "./Roadmaps/App/Components/SyllabusCard.js"

// || Target All Elements 
const roadmapCardsWrapper = document.getElementById('cards--wrapper')
const searchBar = document.getElementById('searchBar')

Data.forEach(data => {
    roadmapCardsWrapper.insertAdjacentHTML('afterbegin', SyllabusCard(data))
})


searchBar.addEventListener('input', event => {
    event.preventDefault()

    let searchValue = searchBar.value

    if (searchValue === '') {
        roadmapCardsWrapper.innerHTML = ''
        Data.forEach(data => {
            roadmapCardsWrapper.insertAdjacentHTML('afterbegin', SyllabusCard(data))
        })
    } else {
        roadmapCardsWrapper.innerHTML = ''
        Data.forEach(data => {
            if ((data.title).toLowerCase().includes(searchValue.toLowerCase())) {
                roadmapCardsWrapper.insertAdjacentHTML('afterbegin', SyllabusCard(data))
            }
        })
        // roadmapCardsWrapper.insertAdjacentHTML('afterbegin', "<h4 class='no--metch'>Oop's! No metch for it.</>")
    }
})
