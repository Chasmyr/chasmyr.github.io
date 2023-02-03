const photographerSection = document.querySelector(".photograph-header")

function detailPhotographerFactory(data) {
    const { name, portrait, price, country, city, id, tagline } = data

    const picture = `assets/photographers/${portrait}`;

    function getUserHeader() {
        const imgContainer = document.createElement('div')
        imgContainer.classList.add("image-container")

        const div = document.createElement('div')
        div.ariaLabel = "Photographer name and description"
        div.classList.add("detail-photogrpaher-text")

        const tilte = document.createElement('h1')
        tilte.textContent = name
        tilte.ariaLabel = name 
        tilte.classList.add("detail-photographer-name")

        const location = document.createElement('p')
        location.textContent = `${city}, ${country}`
        location.classList.add("detail-photographer-location")

        const description = document.createElement('p')
        description.textContent = tagline
        description.classList.add("detail-photographer-description")

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.ariaLabel = name
        img.alt = `${name} profile picture`
        img.classList.add("photographer-picture")
        img.classList.add("detail-img")

        div.appendChild(tilte)
        div.appendChild(location)
        div.appendChild(description)
        photographerSection.appendChild(div)
        imgContainer.appendChild(img)
        photographerSection.appendChild(imgContainer)

        //ajouter également les infos a la modales
        const modalTitle = document.querySelector(".modal-title")
        const titleReplace = document.createElement("h2")
        titleReplace.textContent = `Contactez-moi ${name}`
        const modalLabel = document.querySelector(".modal")
        modalLabel.setAttribute("aria-label", `Contact me ${name}`)

        modalTitle.appendChild(titleReplace)
    }

    //générer l'encart pour le prix et les likes
    function getAside() {
        // générer le prix
        const priceDetail = document.createElement("p")
        priceDetail.textContent = `${price}€/jour`

        // générer le container 
        const container = document.createElement('div')
        container.classList.add('info-container')
        container.appendChild(priceDetail)

        return(container)
    }

    function getLike() {
        //générer les like
        let totalLikes = 0
        const likeCount = document.querySelectorAll('.media-item-like')
        likeCount.forEach((e) => {
            totalLikes += Number(e.innerText)
        })
        const likesToDisplay = document.createElement('div')
        likesToDisplay.classList.add('likes-info')

        const likeIcon = document.createElement("i")
        likeIcon.classList.add("bi")
        likeIcon.classList.add("bi-heart-fill")

        const numberOfLikes = document.createElement('p')
        numberOfLikes.classList.add('total-likes')
        numberOfLikes.textContent = `${totalLikes}`

        likesToDisplay.appendChild(numberOfLikes)
        likesToDisplay.appendChild(likeIcon)

        return(likesToDisplay)
    }

    return {name, portrait, country, city, tagline, price, getUserHeader, getAside, getLike}
}