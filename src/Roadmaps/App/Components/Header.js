export default function Header(data) {
    return (
        `
        <nav class="nav">
            <div class="left--cont">
                <figure class="figure">
                    <img src="./media/logo.png" alt="">
                </figure>
            </div>
            <div class="middel--cont">
                <!-- <input id="searchBar" type="search" placeholder="Search"> -->
                <h1 id="headerText" class="main--heading">${data.title}</h1>
            </div>
            <div class="right--cont">
                <div class="overflow--link">
                    <a href="https://shaileshpandit141.github.io/List-Of-Most-Popular-Programming-Languages-Syllabus/">Home</a>
                </div>
            </div>
        </nav>
        `
    )
}