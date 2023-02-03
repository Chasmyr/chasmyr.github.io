const slide = document.querySelector('.lightbox-slide')
const lightboxContainer = document.getElementById('lightbox_bg')
const lightboxInfo = document.querySelector('.info-title')

// ajouter les event listener ici pour prevent default
const closeBtnLightBox = document.querySelector('.btn-close-lightbox')
closeBtnLightBox.addEventListener('click', (e) => {
    e.preventDefault()
    closeLightbox()
})

const prevBtnLightBox = document.querySelector('.slider-prev-option')
prevBtnLightBox.addEventListener('click', (e) => {
    e.preventDefault()
    prevSlide()
})

const nextBtnLightBox = document.querySelector('.slider-next-option')
nextBtnLightBox.addEventListener('click', (e) => {
    e.preventDefault()
    nextSlide()
})

function openLightBox(media){
    //afficher l'image ou la vidéo
    if(media.video != undefined) {
        const videoToShow = document.createElement("video")
        videoToShow.classList.add("slide-image")
        videoToShow.setAttribute('src', `/assets/images/${media.video}`)
        videoToShow.setAttribute('id', `${media.id}`)
        videoToShow.setAttribute("controls", "controls")
        videoToShow.ariaLabel = "Lilac breasted roller"
        slide.appendChild(videoToShow)
    } else {
        const imageToShow = document.createElement("img")
        imageToShow.classList.add("slide-image")
        imageToShow.setAttribute('id', `${media.id}`)
        imageToShow.setAttribute('src', `/assets/images/${media.image}`)
        imageToShow.ariaLabel = "Lilac breasted roller"
        slide.appendChild(imageToShow)
    }

    lightboxContainer.style.display = 'flex'

    //ajouter le titre du media
    lightboxInfo.textContent = `${media.title}`

    //ajouter le focus
    document.querySelector('.btn-close-lightbox').focus()
}

function closeLightbox(){
    lightboxContainer.style.display = "none"
    const imageToRemove = document.querySelector('.slide-image')
    imageToRemove.remove()
}

function nextSlide(){
    let currentId = document.querySelector('.slide-image').id
    const orderMediaDisplayed = document.querySelectorAll('.media-collection-item')
    let mediaCollection = []
    orderMediaDisplayed.forEach((e) => {
        mediaCollection.push(e.id)
    })
    let currentIndex = mediaCollection.indexOf(currentId)
    let toFind = 0
    if(currentIndex === mediasData.length - 1) {
        toFind = Number(mediaCollection[0])
    } else {
        toFind = Number(mediaCollection[currentIndex + 1])
    }
    let nextMedia = mediasData.find(e => e.id === toFind)

    //préparer le DOM pour afficher la prochaine slide
    const imageToRemove = document.querySelector('.slide-image')
    imageToRemove.remove()

    openLightBox(nextMedia)
}

function prevSlide(){
    let currentId = document.querySelector('.slide-image').id
    const orderMediaDisplayed = document.querySelectorAll('.media-collection-item')
    let mediaCollection = []
    orderMediaDisplayed.forEach((e) => {
        mediaCollection.push(e.id)
    })
    let currentIndex = mediaCollection.indexOf(currentId)
    let toFind = 0
    if(currentIndex === 0) {
        toFind = Number(mediaCollection[mediasData.length - 1])
    } else {
        toFind = Number(mediaCollection[currentIndex - 1])
    }
    let nextMedia = mediasData.find(e => e.id === toFind)

    //préparer le DOM pour afficher la prochaine slide
    const imageToRemove = document.querySelector('.slide-image')
    imageToRemove.remove()

    openLightBox(nextMedia)
}