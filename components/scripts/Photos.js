const Photos = (() => {

    const modalDiv = document.querySelector('.modal');
    const icon = document.querySelector('.fa-times');

    const populateModal = photo => {
        photo.addEventListener("click", photo => {
            const photoURL = photo.target.src;
            const modalHTML = document.querySelector('#modal-img');
            modalHTML.setAttribute("src", `${photoURL}`);
            modalDiv.style.display = "block"; 
        });
    }

    const clickCloseModal = icon => {
        modalDiv.style.display = "none";
    }

    const eachPhoto = document.querySelectorAll('.photo');
    eachPhoto.forEach(photo => { 
        populateModal(photo);
    });
    icon.addEventListener("click", clickCloseModal);
})();

console.log("hi")