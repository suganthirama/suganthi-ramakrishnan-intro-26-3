
let main = document.querySelector("ul")

document.getElementById("1").addEventListener("click", function(event){
    fetch("https://api.artic.edu/api/v1/artworks")
    .then(res => res.json())
    .then(data => {
    main.innerText = "";
        data.data.forEach(artwork => {
                const title = document.createElement("li");
                title.textContent = artwork.title;
                main.appendChild(title);
        });
    });

})

document.getElementById("2").addEventListener("click", function(event){
    fetch(" https://api.artic.edu/api/v1/artists?page=2&limit=10")
    .then(res => res.json())
    .then(data => {
       main.innerText = "";
        data.data.forEach(artist => {
                const title = document.createElement("li");
                title.textContent = artist.title;
                main.appendChild(title);
        });
    });

})


