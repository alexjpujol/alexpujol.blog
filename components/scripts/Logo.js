const Logo = (()=> {
    const spotify = document.querySelector('.logo');
    setTimeout(() => {
        console.log(spotify.style);
        spotify.style.transform = "translate(0px, 0px)"
    }, 1500)
})()