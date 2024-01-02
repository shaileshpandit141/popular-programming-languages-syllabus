// || Hendel Loder Element
const loaderEl = document.getElementById('loader')
window.addEventListener('load', event => {
    event.preventDefault()

    // || Adding css Class to hide loader
    loaderEl.classList.add('loader--hidden')

    loaderEl.addEventListener('transitionend', event => {
        event.preventDefault()

        // || For Deleting element from the document 
        loaderEl.remove()
    })
})
