document.addEventListener('DOMContentLoaded', function() {
    const profileIcon = document.querySelector('.profile-icon');
    const dropdown = document.getElementById('dropdown');


    profileIcon.addEventListener('click', function(event) {
        event.stopPropagation();
        dropdown.classList.toggle('show');
    });


    window.addEventListener('click', function(event) {
        if (!profileIcon.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });

    const searchIcon = document.getElementById('searchIcon');
    const searchContainer = document.querySelector('.search');


    searchIcon.addEventListener('click', (event) => {
        event.stopPropagation(); 
        searchContainer.classList.toggle('open');
        const input = searchContainer.querySelector('.search-input');

        if (searchContainer.classList.contains('open')) {
            input.style.display = 'block'; 
            setTimeout(() => {
                input.style.opacity = '1'; 
            }, 0);
        } else {
            input.style.opacity = '0'; 
            setTimeout(() => {
                input.style.display = 'none'; 
            }, 400); 
        }
    });


    window.addEventListener('click', (event) => {
        if (!searchContainer.contains(event.target) && !searchIcon.contains(event.target)) {
            searchContainer.classList.remove('open');
            searchInput.style.opacity = '0';
            setTimeout(() => {
                searchInput.style.display = 'none';
            }, 400);
        }
    });

    const video = document.getElementById('myVideo');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const videoContainer = document.querySelector('.video-container');
    const progressBar = document.querySelector('input[type="range"]');

    videoContainer.addEventListener('mouseover', function() {
        playPauseBtn.style.display = 'block';
        progressBar.style.display = 'block';
    });

    videoContainer.addEventListener('mouseout', function(event) {
        
        if (!playPauseBtn.contains(event.relatedTarget) && !progressBar.contains(event.relatedTarget)) {
            playPauseBtn.style.display = 'none';
            progressBar.style.display = 'none';
        }
    });

    playPauseBtn.addEventListener('mouseover', function() {
        playPauseBtn.style.display = 'block';
        progressBar.style.display = 'block';
    });

    progressBar.addEventListener('mouseover', function() {
        playPauseBtn.style.display = 'block';
        progressBar.style.display = 'block';
    });

    playPauseBtn.addEventListener('mouseout', function(event) {
        
        if (!videoContainer.contains(event.relatedTarget)) {
            playPauseBtn.style.display = 'none';
            progressBar.style.display = 'none';
        }
    });

    progressBar.addEventListener('mouseout', function(event) {
        if (!videoContainer.contains(event.relatedTarget)) {
            playPauseBtn.style.display = 'none';
            progressBar.style.display = 'none';
        }
    });

        video.addEventListener('mouseover', function() {
            playPauseBtn.style.display = 'block';
            progressBar.style.display = 'block';
        });

        video.addEventListener('mouseout', function() {
            playPauseBtn.style.display = 'none';
            progressBar.style.display = 'none';
        });

    video.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playPauseBtn.src = 'img/pause-icon.png';
            playPauseBtn.alt = 'Pause';
        } else {
            video.pause();
            playPauseBtn.src = 'img/play-icon.png';
            playPauseBtn.alt = 'Play';
        }
    });

    playPauseBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        if (video.paused) {
            video.play();
            playPauseBtn.src = 'img/pause-icon.png';
            playPauseBtn.alt = 'Pause';
        } else {
            video.pause();
            playPauseBtn.src = 'img/play-icon.png';
            playPauseBtn.alt = 'Play';
        }
    });

    video.addEventListener('timeupdate', function() {
        const percentage = (video.currentTime / video.duration) * 100;
        progressBar.value = percentage;
    });

    progressBar.addEventListener('input', function() {
        const newTime = (progressBar.value / 100) * video.duration;
        video.currentTime = newTime;
    });

    video.addEventListener('ended', function() {
        playPauseBtn.src = 'img/play-icon.png';
        playPauseBtn.alt = 'Play';
    });
    
});

