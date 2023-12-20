export default function FooterLink(data) {

    let numbers = data.id > 9 ? `${data.id}` : `0${data.id}`

    return (
        `
        <div class="overflow--link">
            <a href="../${data.url}/">
                <span class="module--tag">${numbers}.</span>
                <span>${data.title}.</span>
            </a>
        </div>
        `
    )
}