const Logos = (()=> {
    const spotify = document.querySelector('.logo');
    const soccer = document.querySelector('.soccer');
    setTimeout(() => {
        spotify.style.transform = "translate(0px, 0px)"
        soccer.style.transform = "translate(0px, 0px)";
    }, 1000)
})()