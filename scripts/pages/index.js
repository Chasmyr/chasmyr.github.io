    const dataURL = '../../data/photographers.json'
    
    async function getPhotographers() {
        let photographers = []
        try {
            const response = await fetch(dataURL)

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const result = await response.json();
            photographers = result.photographers
            console.log(photographers)
            
        }catch (error){
            console.log(error)
        }
        // et bien retourner le tableau photographers seulement une fois récupéré
        return ({
            photographers: [...photographers]})
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
        
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    
