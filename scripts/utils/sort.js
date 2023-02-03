const mediaContainer = document.querySelector(".media-collection")
const likeBtn = document.querySelector('.like-option')
const dateBtn = document.querySelector('.date-option')
const titleBtn = document.querySelector('.title-option')

function sortMediaByLike(medias) {
    let mediasSorted = medias.sort((media1, media2) => {
        if(media1.likes > media2.likes) {
            return -1
        }
        if(media1.likes < media2.likes) {
            return 1
        }
        return 0
    })
    
    return mediasSorted
}

function sortMediaByDate(medias) {
    let mediasSorted = medias.sort((media1, media2) => {
        if(media1.date > media2.date) {
            return -1
        }
        if(media1.date < media2.date) {
            return -1
        }
        return 0
    })
    return mediasSorted
}

function sortMediaByTitle(medias) {
    let mediasSorted = medias.sort((media1, media2) => {
        if(media1.title < media2.title) {
            return -1
        }
        if(media1.title > media2.title) {
            return 1
        }
        return 0
    })
    return mediasSorted
}

function renderWhenFiltered(toRender) {
    //afficher la collection de media filtrée
    mediaContainer.innerHTML = ''
    toRender.forEach((media) => {
        const mediaCollectionModel = mediaFactory(media)
        const mediaDisplayed = mediaCollectionModel.getUserMediaCollection()
        mediaContainer.appendChild(mediaDisplayed)
    })
}

events.forEach(ev => {
    likeBtn.addEventListener(ev, (e) => {
        e.preventDefault()
        if(e.type==="click" || e.keyCode===13) {
            let toRender = sortMediaByLike(mediasData)
            renderWhenFiltered(toRender)
        }
    })
    dateBtn.addEventListener(ev, (e) => {
        e.preventDefault()
        if(e.type==="click" || e.keyCode===13) {
            let toRender = sortMediaByDate(mediasData)
            renderWhenFiltered(toRender)
        }
    })
    titleBtn.addEventListener(ev, (e) => {
        e.preventDefault()
        if(e.type==="click" || e.keyCode===13) {
            let toRender = sortMediaByTitle(mediasData)
            renderWhenFiltered(toRender)
        }
    })
})