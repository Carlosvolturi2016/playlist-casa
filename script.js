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
    
    
    { src: './musicas/Sarah Beatriz - O maior vilão sou eu (Ao Vivo).mp3', cover: './fotos/SARAH-BEATRIZ.jpg', title: 'O maior vilão sou eu' },
    
    { src: './musicas/Abra os Olhos do Meu Coração.mp3', cover: './fotos/coraz.jpg', title: 'Abra os Olhos do Meu Coração' },
    { src: './musicas/Palavras tem poder _ Silmar Coelho (128 kbps).mp3', cover: './fotos/Silmar-Coelho.jpg', title: 'Palavras tem poder _ Silmar Coelho' },
    { src: './musicas/ORAR EM LÍNGUAS, É ORAR A VONTADE DE DEUS - PR SUZANO SELMO (128 kbps).mp3', cover: './fotos/orar.jpg', title: 'ORAR EM LÍNGUAS, É ORAR A VONTADE DE DEUS' },
    { src: './musicas/O Amigo Lázaro -  Pedro Neves - Música de Jadiel Barbosa (128 kbps).mp3', cover: './fotos/lazaro.jpg', title: 'O Amigo Lázaro' },
    { src: './musicas/Quatro Por Um - Cinco Pães E Dois Peixinhos  (128 kbps).mp3', cover: './fotos/peixe.jpg', title: 'Cinco Pães E Dois Peixinhos' },
    { src: './musicas/Samuel Messias - Eu Não Perdi o Controle.mp3', cover: './fotos/controle.jpg', title: 'Eu Não Perdi o Controle' },
    { src: './musicas/Um Chamado (128 kbps).mp3', cover: './fotos/chamado.jpg', title: 'Um Chamado' },
    { src: './musicas/Valesca Mayssa  Árvore Cortada.mp3', cover: './fotos/arvore.jpg', title: 'Árvore Cortada' },
    { src: './musicas/Junior - Soldado Ferido.mp3', cover: './fotos/soldado.jpg', title: 'Soldado Ferido' },
    { src: './musicas/Renascer Praise - 1000 Graus.mp3', cover: './fotos/renacer.jpg', title: '1000 Graus' },
    { src: './musicas/Leandro Borges e Clayton Queiroz - O Silêncio de Deus.mp3', cover: './fotos/silencio.jpg', title: 'O Silêncio de Deus' },
    { src: './musicas/Eli Soares - Pela Fé.mp3', cover: './fotos/fe.jpg', title: 'Pela Fé' },
    { src: './musicas/Canção e Louvor - Eu Sou Mistério.mp3', cover: './fotos/canção.jpg', title: 'Eu Sou Mistério' },
    { src: './musicas/Eli Soares - Vem Com Josué Lutar Em Jericó.mp3', cover: './fotos/jerico.jpg', title: 'Vem Com Josué Lutar Em Jericó' },
    { src: './musicas/Mattos Nascimento - Eu Profetizo.mp3', cover: './fotos/profetizo.jpg', title: 'Eu Profetizo' },
    { src: './musicas/Mattos Nascimento - Geração de Davi.mp3', cover: './fotos/liberdade.jpg', title: 'Geração de Davi' },
    { src: './musicas/Mattos Nascimento - Quando Jesus Estendeu Sua Mão.mp3', cover: './fotos/mao.jpg', title: 'Quando Jesus Estendeu Sua Mão' },
    { src: './musicas/Mattos Nascimento - Alma Abatida.mp3', cover: './fotos/abatida.jpg', title: 'Alma Abatida' },
    { src: './musicas/Colossenses e Suas Linhas de Amor.mp3', cover: './fotos/linhas.jpg', title: 'Colossenses e Suas Linhas de Amor' },
    { src: './musicas/Tu es Bom - Ao Vivo.mp3', cover: './fotos/bom.jpg', title: 'Tu es Bom' },
    { src: './musicas/Que Se Abram Os Céus - Ao Vivo.mp3', cover: './fotos/abre o ceu.jpg', title: 'Que Se Abram Os Céus' },
    { src: './musicas/fases importantes.mp3', cover: './fotos/linguas.jpg', title: 'Fases importantes na oração em línguas' },
    { src: './musicas/Dagom ou Jeová pregação.mp3', cover: './fotos/ab.avif', title: 'Dagom ou Jeová pregação' },
    { src: './musicas/Pastor Geziel Apocalipse.mp3', cover: './fotos/geziel.jpg', title: 'Apocalipse pregação' },
    { src: './musicas/Geziel gomes Óleo Sobre a cabeça.mp3', cover: './fotos/pastor geziel gomes.jpg', title: 'Óleo Sobre a cabeça pregação' },
    { src: './musicas/04 Há uma Saída.mp3', cover: './fotos/Shirley.avif', title: 'Há uma Saída' },
    { src: './musicas/02 Fale com Jesus.mp3', cover: './fotos/fale.jpg', title: 'Fale com Jesus '},
    { src: './musicas/01 Estou Contigo.mp3', cover: './fotos/contigo.jpg', title: 'Estou Contigo' },
    { src: './musicas/Adoração Espontânea 1.mp3', cover: './fotos/adorar.jpg', title: 'Adoração Espontânea 1' },
    { src: './musicas/08-Quando Desce o Espírito Santo.mp3', cover: './fotos/espirito.jpg', title: 'Quando Desce o Espírito Santo' },
    { src: './musicas/05 - Nos braços do Pai.mp3', cover: './fotos/braços.jpg', title: 'Nos braços do Pai' },
    { src: './musicas/04 - Invoca-me.mp3', cover: './fotos/orando.jpg', title: 'Invoca-me' },
    { src: './musicas/03 - Apaixonado por Ti.mp3', cover: './fotos/apai.jpg', title: 'Apaixonado por Ti' },
    { src: './musicas/06 - Me Esvaziar.mp3', cover: './fotos/esvaziar.jpg', title: 'Me Esvaziar' },
    { src: './musicas/Pr Abilio Santana - Aviva a Tua Obra Ó Senhor! - Gideões! 2017.mp3', cover: './fotos/abilio.jpg', title: ' Aviva a Tua Obra Ó Senhor' },
    { src: './musicas/ANJO, PÃO, BRASA E BOTIJA DE ÁGUA - PR ABILIO SANTANA (COMPLETO).mp3', cover: './fotos/1.jpg', title: ' ANJO, PÃO, BRASA E BOTIJA DE ÁGUA Pregação' },
    { src: './musicas/CAMILA BARROS _ O TEMPO ESTÁ ACABANDO _ LAGOINHA ALPHAVILLE.mp3', cover: './fotos/camila.jpg', title: ' O TEMPO ESTÁ ACABANDO' },
    { src: './musicas/Vou chegar mais longe _ Silmar Coelho.mp3', cover: './fotos/silmar1.jpg', title: ' Vou chegar mais longe _ Silmar Coelho' },
    { src: './musicas/Coragem para viver - Pr. Silmar Coelho.mp3', cover: './fotos/silmar2.jpg', title: ' Coragem para viver - Pr. Silmar Coelho ' },
    { src: './musicas/Pr.  Silmar Coelho - Não desista.mp3', cover: './fotos/silmar3.webp', title: ' Não desista _ Silmar Coelho' },
    { src: './musicas/DE ONDE VEIO A MADEIRA DA CRUZ.mp3', cover: './fotos/adelry.jpg', title: 'DE ONDE VEIO A MADEIRA DA CRUZ' },
    { src: './musicas/Pr Jackson Antônio - VOCÊ VAI FLORESCER - 2017 (de arrepiar).mp3', cover: './fotos/jackson.jpeg', title: 'VOCÊ VAI FLORESCER' },
    { src: './musicas/Pr Jackson Antônio - 2018 (Mensagem Impactante 🔥).mp3', cover: './fotos/jackson1.jpg', title: 'Pregação' },
    { src: './musicas/Um Culto Inesquecível! - Pr Gilmar Santos - As Atuações do Espírito na Igreja Primitiva!.mp3', cover: './fotos/pr gilmar santos.jpg', title: 'Pregação A Atuação do Espírito Santo' },
    { src: './musicas/QUANTO VALE UM AMIGO, PASTOR MARCO FELICIANO.mp3', cover: './fotos/pr marco feliciano.jpg', title: 'Pregação QUANTO VALE UM AMIGO' },
    { src: './musicas/Aos Teus Pés (Oficial) - Ministério Vida e Louvor Feat. Pr. Suzano Selmo.mp3', cover: './fotos/suzano.jpg', title: 'Aos Teus Pés' },
    { src: './musicas/ANJOS CANTAM [Espontâneo] - Suzano Selmo (Ao Vivo).mp3', cover: './fotos/suzano2.jpg', title: 'ANJOS CANTAM' },
    { src: './musicas/O LUGAR MAIS ALTO _ Suzano Selmo _ Comunidade Cristã de Barretos.mp3', cover: './fotos/suzano3.jpg', title: 'O LUGAR MAIS ALTO _ Suzano Selmo' },
    { src: './musicas/Fogo em Teus Olhos .mp3', cover: './fotos/fogo.avif', title: 'Fogo em Teus Olhos' },
    { src: './musicas/Levantai Ó Portas (Ao Vivo).mp3', cover: './fotos/levantai o porta.jpg', title: 'Levantai Ó Portas' },
    { src: './musicas/Ministério Exodus _ O Encontro [Cover Valesca Mayssa e Jefferson & Suellen].mp3', cover: './fotos/mesa.jpg', title: 'O Encontro' },
    { src: './musicas/PR ISAIAS DE OLIVEIRA  (VIVENDO O PROPOSITO).mp3', cover: './fotos/pr isaias.jpg', title: '(VIVENDO O PROPOSITO)' },
    { src: './musicas/4 Dimensões do maná.m4a', cover: './fotos/geziel.jpg', title: '(4 Dimensões do maná)' },
    { src: './musicas/Kemilly Santos _ Deus de Obras Completas [Clipe Oficial].mp3', cover: './fotos/Kemilly.jpg', title: 'Kemilly Santos _ Deus de Obras Completas'},
    { src: './musicas/Kemilly Santos - Fica Tranquilo - (Lyric Vídeo).mp3', cover: './fotos/Kemilly1.jpg', title: '(Kemilly Santos - Fica Tranquilo )' },
    { src: './musicas/Kemilly Santos, Anderson Freire - Presença (Clipe Oficial).mp3', cover: './fotos/anderson e kemily.jpg', title: 'Kemilly Santos, Anderson Freire - Presença ' },
    { src: './musicas/Sued Silva _ Reacende a Chama [Vídeo Letra].mp3', cover: './fotos/sued.avif', title: '(Sued Silva _ Reacende a Chama )' },
    { src: './musicas/MARAVILHADO - NÍVEA SOARES _ AO VIVO.mp3', cover: './fotos/nivea.avif', title: '(/MARAVILHADO - NÍVEA SOARES)' },
    { src: './musicas/Nívea Soares - Digno de Tudo + Te Exaltamos (Ao vivo).mp3', cover: './fotos/nivea1.jpg', title: 'Nívea Soares - Digno de Tudo + Te Exaltamos' },
    { src: './musicas/Renascer Praise – Eu Vou Clamar (Ao Vivo).mp3', cover: './fotos/renascer.jpg', title: '(Renascer Praise – Eu Vou Clamar)' },
    { src: './musicas/Felipe Rodrigues - Tudo é Perda (Ao Vivo).mp3', cover: './fotos/felipe.jpg', title: '(Felipe Rodrigues - Tudo é Perda)' },
    { src: './musicas/O FOGO ARDERÁ AO VIVO - Alexsander Lucio (Clipe Oficial Céu Music).mp3', cover: './fotos/ardera.jpg', title: 'O FOGO ARDERÁ AO VIVO - Alexsander Lucio' },
    { src: './musicas/Samuel Miranda - Coração de Joelhos (Clipe Oficial MK Music).mp3', cover: './fotos/samuel.jpg', title: 'Samuel Miranda - Coração de Joelhos' },
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
    { src: './musicas/Felipe Ramos _ Hoje Entendi (Live Session).mp3', cover: './fotos/hoje.jpg', title: 'Felipe Ramos _ Hoje Entendi'},
    { src: './musicas/SEDE _ Felipe Ramos e Mauro Henrique.mp3', cover: './fotos/sede.jpg', title: 'SEDE _ Felipe Ramos e Mauro Henrique'},
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
    { src: './musicas/Templo Soul & Ao Cubo 🎵 Venha Filho Meu.mp3',cover: './fotos/filhomeu.jpg', title: 'Templo Soul & Ao Cubo 🎵 Venha Filho Meu'},
    { src: './musicas/paulo e silas.mp3',cover: './fotos/alison.jpg', title: 'Alison e Neide -Paulo e Silas'},








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