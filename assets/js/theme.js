


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu_links');
    const navLinks = document.querySelectorAll('.menu_links li');




    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.getElementsByClassName.animation) {
                link.getElementsByClassName.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards 
            ${index / 7 + 1}s`;
            }

        });


        // burger animation
        burger.classList.toggle('toggle_line');


    });


}

navSlide();


const playVideo = () => {

    const videoPlayer = document.querySelector('.banner');
    const video = videoPlayer.querySelector('.video');
    const playButton = videoPlayer.querySelector('.play_button');

    playButton.addEventListener('click', (e) => {
        if (video.paused) {
            video.play();
            e.target.textContent = '❚ ❚';
            e.target.style = "font-size:24px";
            e.target.style = "color:#fff";

        } else {
            video.pause();
            e.target.textContent = '►';
            e.target.style = "font-size:24px";
            e.target.style = "color:#fff";
        }
    })
}

playVideo();