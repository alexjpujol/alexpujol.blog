const Photos = (() => {
    const eachPhoto = document.querySelectorAll('.photo');
    eachPhoto.forEach(photo => {
        photo.addEventListener('click', e => {
            const photoURL = e.target.src;
            const modalDiv = document.querySelector('.modal');
            const modalHTML = document.querySelector('#modal-img');
            modalHTML.setAttribute("src", `${photoURL}`);
            modalDiv.style.display = "block";
        })
    });
})();