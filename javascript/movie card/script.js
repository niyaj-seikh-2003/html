let movies=[
    {
        title:"Pathu Thala",
        imageUrl:"https://static.moviecrow.com/gallery/20221231/210311-Pathu%20Thala%20Release%20Date.jpg",
        year:2016,
    },
    {
        title:"1971 Beyond Border",
        imageUrl:"http://www.behindwoods.com/malayalam-movies/1971-beyond-borders/stills-photos-pictures/1971-beyond-borders-stills-photos-pictures-31.jpg",
        year:2018 ,
    },
    {
        title:"Vikram vedha ",
        imageUrl:"https://i.pinimg.com/originals/ea/d8/3e/ead83e19c473dae6d2338e654f7ea18d.jpg",
        year:2023 ,
    },
    {
        title:"Crack :Jitega to jiyaha",
        imageUrl:"https://www.justwatch.com/images/poster/313213590/s718/crakk-jeetegaa-toh-jiyegaa.jpg",
        year:2024 ,
    },
    {
        title:"DNA ",
        imageUrl:"https://assets.voxcinemas.com/posters/P_HO00012275_1750163561187.jpg",
        year:2022 ,
    },
    {
        title:"Kill",
        imageUrl:"https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/kill-2024/large_killpost.jpg",
        year:2025 ,
    },
    {
        title:"Amaran",
        imageUrl:"https://m.media-amazon.com/images/M/MV5BZGQyYTA0Y2EtYTA1NC00YTkzLWJiMmQtNzUzZGMzNjc5ZjM1XkEyXkFqcGc@._V1_.jpg",
        year:2024 ,
    },
    {
        title:"Pushpa 2",
        imageUrl:"https://juksun.com/wp-content/uploads/2023/02/Pushpa-2-The-Rule-Movie-Poster-2-1.jpg",
        year:2024 ,
    },
    {
        title:"K G F",
        imageUrl:"https://i.ytimg.com/vi/1xG_y3RA2pw/maxresdefault.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4AbYIgAKAD4oCDAgAEAEYZSBaKEkwDw==&rs=AOn4CLBSB3qoFc6drcsdIlY-V8DYwdBTpQ",
        year:2020 ,
    },
    {
        title:"Coolie",
        imageUrl:"https://static.moviecrow.com/gallery/20240902/233847-Coolie%20Rajinikanth%20Deva%20Character%20Poster.jpg",
        year:2025 ,
    },
]
function displayMovies() {
    movies.forEach((e, i) => {
        const movieDiv = document.createElement("div")
        movieDiv.classList.add("movie")
        const image = document.createElement("img")
        image.src = e.imageUrl
        image.alt = e.title
        const title = document.createElement("h2")
        title.textContent = e.title
        const para = document.createElement("p")
        para.textContent = e.year
        movieDiv.append(image, title, para)
        document.getElementById("library").appendChild(movieDiv)
    })
}
displayMovies()

