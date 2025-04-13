// Referências aos elementos de áudio e controle
const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play-btn');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const currentTrackDisplay = document.getElementById('current-track');
const albumCover = document.getElementById('album-cover');
const volumeSlider = document.getElementById('volume-slider');



// Lista de faixas
const tracks = [
    
    { src: './musicas/Godcore - Eu Não Aceito (Clipe Oficial).mp3', cover: './fotos/godcore.gif', title: 'Godcore - Eu Não Aceito'},
    { src: './musicas/O Muro de Pedra - Sol da Justiça (Studio Session).mp3', cover: './fotos/murodapedra.jpg', title: 'O Muro de Pedra - Sol da Justiça'},
    { src: './musicas/Único Caminho _ Judas (Clipe Oficial).mp3', cover: './fotos/unico.jpg', title: 'Único Caminho _ Judas'},
    { src: './musicas/Banda Freedom - Não Vou Me Calar - VídeoClipe Oficial.mp3', cover: './fotos/eu.jpg', title: 'Banda Freedom - Não Vou Me Calar '},
    { src: './musicas/Apogeu - Babel (LIVE SESSION).mp3', cover: './fotos/apogeu.png', title: 'Apogeu - Babel'},
    { src: './musicas/SEIVA BRUTA - A Verdade (Official Music Video).mp3', cover: './fotos/seiva.avif', title: 'SEIVA BRUTA - A Verdade'},
    { src: './musicas/Judas O Outro - Deserto 2.0 (Official Video).mp3', cover: './fotos/judas.jpg', title: 'Judas O Outro'},
    { src: './musicas/Trini - A Fantasia e o Mágico (Clip oficial ).mp3', cover: './fotos/fantasia.jpg', title: 'Trini - A Fantasia e o Mágico'},
    { src: './musicas/tudo é vaidade.mp3', cover: './fotos/vaidade.jpg', title: 'Oficina G3-tudo é vaidade'},
    { src: './musicas/Aceia - Terra santa (VIDEO OFFICIAL).mp3', cover: './fotos/aceia.jpg', title: 'Aceia - Terra santa'},
    { src: './musicas/Athos 2 - Novo Horizonte part. Miqueias Medeiros (Clipe Oficial).mp3', cover: './fotos/athos.jpg', title: 'Athos 2 - Novo Horizonte'},
    { src: './musicas/Reatar 12 - Última Guerra 『Official Music Video』.mp3', cover: './fotos/reatar.png', title: 'Reatar 12 - Última Guerra'},
    { src: './musicas/Folhas de Outono - Onde a Realidade se Transforma (CLIPE OFICIAL).mp3', cover: './fotos/folhas.jpg', title: 'Folhas de Outono - Onde a Realidade se Transforma'},
    { src: './musicas/Venore - Essa Não É Mais Uma Sobre Liberdade (Clipe Oficial).mp3', cover: './fotos/venore.jpg', title: 'Venore - Essa Não É Mais Uma Sobre Liberdade'},
    { src: './musicas/O Muro de Pedra feat. Mauro Henrique - Virtual.mp3', cover: './fotos/virtual.jpg', title: 'O Muro de Pedra feat. Mauro Henrique - Virtual'},
    { src: './musicas/FERNANDINHO - ROCK_METAL MEDLEY - MICHEL OLIVEIRA.mp3', cover: './fotos/athos.jpg', title: 'FERNANDINHO - ROCK_METAL MEDLEY'},
    { src: './musicas/Eu Navegarei _ Levitânea.mp3', cover: './fotos/levitanea.jpg', title: 'Eu Navegarei _ Levitânea'},
    { src: './musicas/Reatar 12 - Afronta - CLIPE OFICIAL (HD).mp3', cover: './fotos/reatar.png', title: 'Reatar 12 - Afronta '},
    { src: './musicas/Remadores do Último Porão -  Recomeço  [ CLIPE FULLHD ].mp3', cover: './fotos/remadores.jpg', title: 'Remadores do Último Porão -  Recomeço '},
    { src: './musicas/Athos 2- Volta (clipe Oficial).mp3', cover: './fotos/athos.jpg', title: 'Athos 2- Volta '},
    { src: './musicas/Resgate - Lenha Pra Queimar - feat. Manga, Marcão e Mateus Asato - (Oficial Video).mp3', cover: './fotos/resgate.jpg', title: 'Resgate - Lenha Pra Queimar'},
    { src: './musicas/Banda LIV - Espinhos (Clipe Oficial).mp3', cover: './fotos/espinhos.jpg', title: 'Banda LIV - Espinhos'},
    { src: './musicas/Folhas de Outono - Nárnia (Oficial Lyric Vídeo).mp3', cover: './fotos/narnia.jpg', title: 'Folhas de Outono - Nárnia'},
    { src: './musicas/Remadores do Último Porão -  Fé  [CLIPE FULLHD].mp3', cover: './fotos/remadores.jpg', title: 'Remadores do Último Porão -  Fé'},
    { src: './musicas/DigitalBomb - Foi Na Cruz (Videoclipe Oficial).mp3', cover: './fotos/bomb.jpg', title: 'DigitalBomb - Foi Na Cruz'},
    { src: './musicas/APOGEU - Negue-se  (letra e música).mp3', cover: './fotos/apogeu.png', title: 'APOGEU - Negue-se'},
    { src: './musicas/SUPERMAN - DVD A Volta dos que não Foram - Fruto Sagrado (Oficial).mp3',cover: './fotos/super.jpg', title: 'Resgate- SUPERMAN '},
    







]



let currentTrackIndex = 0;
let isPlaying = false;


// Função para carregar uma nova faixa
function loadTrack(index) {
    const track = tracks[index];
    if (track) {
        audioPlayer.src = track.src;
        albumCover.src = track.cover;
        currentTrackDisplay.textContent = `Tocando: ${track.title}`;
        audioPlayer.load();
        if (isPlaying) {
            audioPlayer.play();
        }
    }
}

// Função para tocar/pausar a faixa atual
function playPauseTrack() {
    if (isPlaying) {
        audioPlayer.pause();
        playButton.textContent = 'Play';
    } else {
        audioPlayer.play();
        playButton.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
}

// Função para avançar para a próxima faixa
function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
}

// Função para voltar para a faixa anterior
function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
}

// Controle de volume
function adjustVolume() {
    audioPlayer.volume = volumeSlider.value;
}

// Eventos de clique para os botões de controle
playButton.addEventListener('click', playPauseTrack);
nextButton.addEventListener('click', nextTrack);
prevButton.addEventListener('click', prevTrack);
volumeSlider.addEventListener('input', adjustVolume);

// Evento para tocar a próxima faixa quando a atual terminar
audioPlayer.addEventListener('ended', nextTrack);

// Carrega a primeira música ao iniciar a página
window.addEventListener('load', () => {
    loadTrack(currentTrackIndex);

initButton.addEventListener('click', () => {
    loadTrack(currentTrackIndex);
    audioPlayer.play();
    initButton.remove();
});
document.body.appendChild(initButton);
});

// Lista de arquivos na pasta 'fundo'
const fundos = [
  
    
    "fundo/ondas.jpg",
    "fundo/fundo3.gif",
    
    
    


    
   
    // Adicione mais fundos aqui...
];

let fundoIndex = 0;
const fundoElement = document.getElementById('fundo-dinamico');

// Função para mudar o fundo
function mudarFundo() {
    const arquivo = fundos[fundoIndex];
    const extensao = arquivo.split('.').pop().toLowerCase();

    if (extensao === 'mp4' || extensao === 'webm' || extensao === 'ogg') {
        // Se for um vídeo
        const video = document.createElement('video');
        video.id = 'video-fundo';
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.innerHTML = `<source src="${arquivo}" type="video/${extensao}">`;

        // Remove o vídeo anterior
        fundoElement.innerHTML = '';
        fundoElement.appendChild(video);

        // Garantir que o vídeo esteja carregado antes de exibir
        video.addEventListener('loadeddata', () => {
            video.style.opacity = '1';
        });

        video.style.opacity = '0';
    } else {
        // Se for uma imagem ou GIF
        fundoElement.style.backgroundImage = `url('${arquivo}')`;
    }

    // Atualiza o índice para o próximo fundo
    fundoIndex = (fundoIndex + 1) % fundos.length;
}

// Mudar o fundo a cada 45 segundos
setInterval(mudarFundo, 45000);

// Iniciar com o primeiro fundo
mudarFundo();  