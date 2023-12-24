export default function DropdownCard(data) {

    let modualNumWithZero = data.id < 10 ? `0${data.id}` : data.id
    let subheadingEls = data.subHeadings.map(prevdata => {
        return `<li>${prevdata}</li>`
    })

    return (
        `
        <div class="roadmaps">
            <button ${'data-state' + data.id}="true" id="${'data-state' + data.id}" class="heading--cont--btn">
                <span class="module--tag">Module:${modualNumWithZero}</span>
                <h3> ${data.heading}</h3>
                <figure class="icon--cont">
                    <img id="${'icon--' + data.id}" src="../App/CommonFiles/icons/angle-small-up.svg" alt="" width="24px" height="24px">
                </figure>
            </button>
            <div id="${'subheading--cont' + data.id}" class="sub--heading--cont">
                <!-- || Subheading  -->
                <ol class="ol">
                    ${subheadingEls.join('\n')}
                </ol>
            </div>
        </div>
        `
    )
}