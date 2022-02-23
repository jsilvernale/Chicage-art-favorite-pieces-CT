getInfo = (image) => {  
// for(let x = 0; x < 4; x++){
    // let image = document.querySelector(`img`).getAttribute(`alt`)    
    fetch(`https://api.artic.edu/api/v1/artworks/${image}`)
    .then(response => response.json())
    .then(my_data => {      
        console.log(my_data)
        let art_name = my_data.data.title
        document.querySelector(`#img-name0`).innerHTML=art_name;
        let artist = my_data.data.artist_title
        document.querySelector(`#artist0`).innerHTML=artist;
        let year = my_data.data.date_display
        document.querySelector(`#date0`).innerHTML=year;
    })
}

getInfo1 = (image) => {  
// for(let x = 0; x < 4; x++){
    // let image = document.querySelector(`img`).getAttribute(`alt`)    
    fetch(`https://api.artic.edu/api/v1/artworks/${image}`)
    .then(response => response.json())
    .then(my_data => {      
        console.log(my_data)
        let art_name = my_data.data.title
        document.querySelector(`#img-name1`).innerHTML=art_name;
        let artist = my_data.data.artist_title
        document.querySelector(`#artist1`).innerHTML=artist;
        let year = my_data.data.date_display
        document.querySelector(`#date1`).innerHTML=year;
    })
}

getInfo2 = (image) => {  
// for(let x = 0; x < 4; x++){
    // let image = document.querySelector(`img`).getAttribute(`alt`)    
    fetch(`https://api.artic.edu/api/v1/artworks/${image}`)
    .then(response => response.json())
    .then(my_data => {      
        console.log(my_data)
        let art_name = my_data.data.title
        document.querySelector(`#img-name2`).innerHTML=art_name;
        let artist = my_data.data.artist_title
        document.querySelector(`#artist2`).innerHTML=artist;
        let year = my_data.data.date_display
        document.querySelector(`#date2`).innerHTML=year;
    })
}

getInfo3 = (image) => {  
// for(let x = 0; x < 4; x++){
    // let image = document.querySelector(`img`).getAttribute(`alt`)    
    fetch(`https://api.artic.edu/api/v1/artworks/${image}`)
    .then(response => response.json())
    .then(my_data => {      
        console.log(my_data)
        let art_name = my_data.data.title
        document.querySelector(`#img-name3`).innerHTML=art_name;
        let artist = my_data.data.artist_title
        document.querySelector(`#artist3`).innerHTML=artist;
        let year = my_data.data.date_display
        document.querySelector(`#date3`).innerHTML=year;
    })
}

