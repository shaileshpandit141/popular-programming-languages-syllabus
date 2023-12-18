export default function DropdownCard(Data) {

    let modualNumWithZero = Data.id < 10 ? `0${Data.id}` : Data.id 

    return (
        `
        <div class="roadmaps">
            <button ${'data-state' + Data.id}="true" id="${'data-state' + Data.id}" class="heading--cont--btn">
                <span class="module--tag">Module:${modualNumWithZero}</span>
                <h3> ${Data.heading}</h3>
                <figure class="icon--cont">
                    <img id="${'icon--' + Data.id}" src="./media/angle-small-up.svg" alt="" width="24px" height="24px">
                </figure>
            </button>
            <div id="${'subheading--cont' + Data.id}" class="sub--heading--cont">
                <ol id="${'subheading--' + Data.id}" class="ol">
                    <!-- || Subheading  -->
                </ol>
            </div>
        </div>
        `
    )
}