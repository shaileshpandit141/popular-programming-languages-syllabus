// || Hendel Loder Element
const loderEl = document.getElementById('loder')
window.addEventListener('load', event => {
    event.preventDefault()

    // || Adding css Class to hide loader
    loderEl.classList.add('loder--hidden')

    loderEl.addEventListener('transitionend', event => {
        event.preventDefault()

        // || For Deleting element from the document 
        loderEl.remove()
    })
})