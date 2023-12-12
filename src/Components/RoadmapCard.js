export default function RoadmapCard(data) {

    let num1 = data.id > 9? `${data.id}`: `0${data.id}`

    return (
        `
        <div class="roadmap--card--cont">
            <a href="Roadmaps/${data.link}" class="card--link">
                <h3 class="title">${data.title}</h3>
                <p class='discription'>
                    ${data.discription}
                </p>
                <p class="viewit--cont">
                    <span>View it</span>
                    <span class="arrow">&#10140;</span>
                </p>
            </a>
        </div>
        `
    )
}