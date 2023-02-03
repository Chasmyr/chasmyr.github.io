const dataURL = '../../data/photographers.json'
let mediasData = null
const events = ['click', 'keypress']

// récupérer l'id présent dans l'url
const params = (new URL(document.location)).searchParams
const idToFind = params.get('id')

async function getMediaAndPhotographer() {
    let photographer = null
    let mediaToShow = []
    try {
        const response = await fetch(dataURL)

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const result = await response.json();
        // trouver le bon photographe vis a vis de l'id entrée dans l'url
        photographers = result.photographers
        photographers.map((e) => {
            if(e.id == idToFind) {
                photographer = e
            }
        })
        // trouver les médias du photographe
        medias = result.media 
        medias.map((e) => {
            if(e.photographerId == idToFind) {
                mediaToShow.push(e)
            }
        })
        
    }catch (error){
        console.log(error)
    }
    // et bien retourner le tableau photographers seulement une fois récupéré
    return ({
        photographer: photographer,
        medias: mediaToShow
    })
}

async function displayData(photographer, medias) {
    mediasData = medias
    const photographerModel = detailPhotographerFactory(photographer)

    //afficher le header 
    const header = photographerModel.getUserHeader()

    //afficher la collection de media
    const mediaContainer = document.querySelector(".media-collection")
    medias.forEach((media) => {
        const mediaCollectionModel = mediaFactory(media)
        const mediaDisplayed = mediaCollectionModel.getUserMediaCollection()
        mediaContainer.appendChild(mediaDisplayed)
    });

    //afficher le petit encart
    const encart = document.querySelector('.info-collection')
    const priceDetail = photographerModel.getAside()
    const likeDetail = photographerModel.getLike()
    priceDetail.appendChild(likeDetail)
    encart.appendChild(priceDetail)
};

async function init(){
    const { photographer, medias } = await getMediaAndPhotographer()
    displayData(photographer, medias)
}

init()