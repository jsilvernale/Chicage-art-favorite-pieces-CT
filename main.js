let imgInfo;
let showInfo;

const _getAPI = async () => {
    const result = await fetch(`https://api.artic.edu/api/v1`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'AIC-User-Agent': 'aicFavorites (jsilvernale21@gmail.com)'
        },
        body: 'grant_type=None'
    });
    const data = await result.json();
    return data
}

async function clickedEvent(img_index, item_index){
    let title = document.getElementsByTagName('img')[img_index].attributes[2].value

    let headers = new Headers([
        ['content-type', 'application/json'],
        ['Accept', 'application/json'],
        ['Authorization', `None`]
    ]);

    let request = new Request(`https://api.artic.edu/api/v1/artworks/?fields=${title}/info.json`,{
    method: 'GET',
    headers: headers
    });

    let result = await fetch(request);

    let response = await result.json();

    console.log(response)
    let imgInfo = response.tracks.items[item_index].preview_url

    if (showInfo){
        stopDisplay();
    }
    display(imgInfo);
}

function getInfo(id, event){
    switch(id){
        case 'img1':{
            event.getElementById();
            clickedEvent(0,0)
            break;
        }
        case 'img2':{
            event.getElementById();
            clickedEvent(1,0)
            break;
        }
        case 'img3':{
            event.getElementById();
            clickedEvent(2,0)
            break;
        }
        case 'img4':{
            event.getElementById();
            clickedEvent(3,0)
            break;
        }
    }
}

function display(url){
    showInfo = new Info(url);
    return showInfo
}

function stopDisplay(){
    return None
}
