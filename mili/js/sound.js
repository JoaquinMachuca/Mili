const mainTheme = new Audio();
const si = document.getElementById('cajaLinda');

mainTheme.src = '/music/sound1.mp3';
mainTheme.loop = true;
mainTheme.play();

si.addEventListener('click', () => {
    mainTheme.src = '/music/sound2.mp3';
    mainTheme.play();
})
