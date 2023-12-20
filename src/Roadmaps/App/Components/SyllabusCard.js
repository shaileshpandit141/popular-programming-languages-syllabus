export default function SyllabusCard(data) {

    let num1 = data.id > 9? `${data.id}`: `0${data.id}`

    return (
        `
        <div class="roadmap--card--cont">
            <a href="./src/Roadmaps/${data.url}/" class="card--link">
                <div class='heading--cont'>
                    <figure class='figure--cont'>
                        <img src="./src/Roadmaps/${data.url}/media/logo.png" alt="">
                    </figure>
                    <h3 class="title">${data.title}</h3>
                </div>
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
