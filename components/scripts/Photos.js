const Photos = (() => {

    const modalDiv = document.querySelector('.modal');
    const modalImg = document.querySelector('#modal-img');
    const icon = document.querySelector('.fa-times');

    const populateModal = photo => {
        photo.addEventListener("click", photo => {
            const photoURL = photo.target.src;
            const photoOrder = photo.target.attributes[2].nodeValue;
            modalImg.setAttribute("data-order", `${photoOrder}`);
            modalImg.setAttribute("src", `${photoURL}`);
            modalDiv.style.display = "block"; 
        });
    }

    const clickCloseModal = icon => {
        modalDiv.style.display = "none";
    }

    const escCloseModal= () => {
        window.addEventListener("keydown", e => {
            if (e.keyCode === 27) {
                modalDiv.style.display = "none";
            }
        })
    }

    const scrollModal = () => {
        const photos = document.querySelectorAll(".photo img");
        const photoSRC = [];
        photos.forEach(photo => {
            photoSRC.push(photo.src);
        });
        console.log(photoSRC)

        window.addEventListener("keydown", e => {
            if (modalDiv.style.display === 'block') {
                if (e.keyCode === 37) {
                    const order = modalImg.getAttribute("data-order");
                    modalImg.setAttribute("src", )
                } else if (e.keyCode === 39) {
                    console.log("right")
                }
            }           
        })
        
    }

    const eachPhoto = document.querySelectorAll('.photo');
    eachPhoto.forEach(photo => { 
        populateModal(photo);
    });
    icon.addEventListener("click", clickCloseModal);
    escCloseModal();
    scrollModal();
})();