let getImage;
let getImageInfo;

const _getURL = async () => {
    const result = await fetch(`https://api.artic.edu/api/vi`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/ld+json',
            'AIC-User-Agent': 'aicFavorites (jsilvernale21@gmail.com)'
        },
    });
    const data = await result.json();
    return data.access_token
}

function getImage(src) {
    switch(image-1){   
        case 'img1': {
            "data", {
                "id": 27992,
                "title": "A Sunday on La Grande Jatte-1884",
                "image_id": "1adf2696-8489-499b-cad2-821d7fde4b33",
            },
            "config", {
                "iiif_url": "https://www.artic.edu/iiif/2"
            }
        }
    }
}

async function clickedEvent(img_index, item_index) {
    let track = document.getElementsByTagName('img')[img_index].attributes[2].value

    let headers = new Headers ([
        ['Content-type', 'application/json'],
        ['Accept', 'application/json'],
        ['Authorization',  `None`]
    ]);
}
