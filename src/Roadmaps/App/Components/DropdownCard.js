export default function DropdownCard(data) {

    let modualNumWithZero = data.id < 10 ? `0${data.id}` : data.id
    let subheadingEls = data.subHeadings.map(prevdata => {
        return (
            `<h3 class='submodule--text'>
                <li>${prevdata}</li>
            </h3>
            `
        )
    })

    return (
        `
        <div class="roadmaps" id="${'module' + data.id}">
            <div ${'data-state' + data.id}="true" id="${'data-state' + data.id}" class="heading--cont--btn">
                <!--<span class="module--tag">M${modualNumWithZero}.</span>-->
                <h2> ${data.heading}</h2>
                <figure class="icon--cont">
                    <img id="${'icon--' + data.id}" src="../App/CommonFiles/icons/angle-small-right.svg" alt="" width="24px" height="24px">
                </figure>
            </div>
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