const Photos = (() => {

    const modalDiv = document.querySelector('.modal');
    const modalImg = document.querySelector('#modal-img');
    const icon = document.querySelector('.fa-times');
    let photoOrder;
    let newPhotoOrder;

    const populateModal = photo => {
        photo.addEventListener("click", photo => {
            const photoURL = photo.target.src;
            photoOrder = parseInt(photo.target.attributes[2].nodeValue);
            modalImg.setAttribute("data-order", photoOrder);
            modalImg.setAttribute("src", `${photoURL}`);
            modalDiv.style.display = "block"; 
        });
    }

    const clickCloseModal = icon => {
        modalDiv.style.display = "none";
    }

    const escCloseModal = () => {
        window.addEventListener("keydown", e => {
            if (e.keyCode === 27) {
                modalDiv.style.display = "none";
            }
        })
    }


    const scrollModal = () => {
        const photos = [...document.querySelectorAll(".photo img")];
        window.addEventListener("keydown", e => {
            if (modalDiv.style.display === 'block') {
                if (e.keyCode === 37) {
                    newPhotoOrder = photoOrder === 0 ? 3 : photoOrder - 1;
                    modalImg.setAttribute("src", photos[newPhotoOrder].getAttribute("src"));
                    photoOrder = newPhotoOrder;
                } else if (e.keyCode === 39) {
                    newPhotoOrder = photoOrder === 3 ? 0 : photoOrder + 1;
                    modalImg.setAttribute("src", photos[newPhotoOrder].getAttribute("src"));
                    photoOrder = newPhotoOrder;
                }
            }           
        }) 
    }

    const eachPhoto = document.querySelectorAll('.photo img');
    eachPhoto.forEach(photo => { 
        populateModal(photo);
    });
    icon.addEventListener("click", clickCloseModal);
    icon.addEventListener("touchend", clickCloseModal);
    escCloseModal();
    scrollModal();
})();