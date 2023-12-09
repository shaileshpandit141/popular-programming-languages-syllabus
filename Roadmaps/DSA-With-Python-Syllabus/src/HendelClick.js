const headingEls = document.querySelectorAll('.heading--cont--btn')

function hendelClick() {
    for (let index = 0; index < headingEls.length; index++) {

        let iconEl = document.getElementById(`${'icon--' + (index+1)}`)
        let subHeadingContainerEl = document.getElementById(`${'subheading--cont' + (index+1)}`)
        
        let attName = `${'data-state' + (index+1)}`
        let clickStateEl = document.getElementById(attName)
        
        headingEls[index].addEventListener('click', (event) => {
            event.preventDefault()

            let clickState = clickStateEl.getAttribute(attName)

            if (clickState === 'true') {
                clickStateEl.setAttribute(attName, 'false')
                iconEl.style.transform = 'rotateZ(180deg)'
                headingEls[index].classList.add('activeBg')
                subHeadingContainerEl.style.height = 'fit-content'
            } else {
                clickStateEl.setAttribute(attName, 'true')
                iconEl.style.transform = 'rotateZ(0deg)'
                headingEls[index].classList.remove('activeBg')
                subHeadingContainerEl.style.height = '0px'
            }
        })

    }
}

hendelClick()
