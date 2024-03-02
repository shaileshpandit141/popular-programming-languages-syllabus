const headingEls = document.querySelectorAll('.heading--cont--btn')

function hendelClick() {
    for (let index = 0; index < headingEls.length; index++) {

        const headingEl = headingEls[index]
        headingEl.addEventListener('click', (event) => {
            event.preventDefault()

            let iconEl = document.getElementById(`${'icon--' + (index + 1)}`)
            let subHeadingContainerEl = document.getElementById(`${'subheading--cont' + (index + 1)}`)

            let attName = `${'data-state' + (index + 1)}`
            let clickStateEl = document.getElementById(attName)

            const moduleEl = document.getElementById(`module${index + 1}`)

            let clickState = clickStateEl.getAttribute(attName)

            if (clickState === 'true') {
                clickStateEl.setAttribute(attName, 'false')
                iconEl.style.transform = 'rotateZ(90deg)'
                subHeadingContainerEl.style.height = 'fit-content'
                subHeadingContainerEl.style.paddingBottom = '16px'
                headingEl.style.backgroundColor = 'var(--bg-btn-color)'
                moduleEl.style.backgroundColor = 'var(--bg-btn-color)'
            } else {
                clickStateEl.setAttribute(attName, 'true')
                iconEl.style.transform = 'rotateZ(0deg)'
                subHeadingContainerEl.style.height = '0px'
                subHeadingContainerEl.style.paddingBottom = '0'
                headingEl.style.backgroundColor = '#21252b'
                moduleEl.style.backgroundColor = 'var(--bg-color)'
            }
        })

    }
}

hendelClick()


