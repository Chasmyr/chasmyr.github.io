function photographerFactory(data) {
    const { name, portrait, price, country, city, id, tagline } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        const link = document.createElement('a')
        link.href = `/photographer.html?id=${id}`
        link.classList.add("photographer-redirect")
        link.ariaLabel = `See the work of photographer ${name}`

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.classList.add("photographer-picture")
        img.ariaLabel = name
        img.alt = `${name} profile picture`

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        h2.classList.add("photographer-name")
        h2.ariaLabel = name

        const location = document.createElement('p')
        location.textContent = `${city}, ${country}`
        location.classList.add("photographer-location")

        const description = document.createElement('p')
        description.textContent = tagline
        description.classList.add("photographer-description")

        const pricePerDay = document.createElement('p')
        pricePerDay.textContent = `${price}€/jour`
        pricePerDay.classList.add("photographer-price")

        link.appendChild(img)
        link.appendChild(h2)
        article.appendChild(link)
        article.appendChild(location)
        article.appendChild(description)
        article.appendChild(pricePerDay)
        return (article);
    }
    return { name, picture, country, city, tagline, id, getUserCardDOM }
}