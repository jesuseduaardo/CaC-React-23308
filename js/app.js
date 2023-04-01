import config from './config.json' assert {type: 'json'};

const url = `${config.apiUrl}?api_key=${config.ak.substring(5, config.ak.length - 5)}&language=${config.language}`;
const btnAnt = document.querySelector('#btnAnterior');
const btnSig = document.querySelector('#btnSiguiente');
const logo = document.querySelector('.logo');
const pagina = document.querySelector('#pagina');

let pag = 1;

btnAnt.addEventListener('click', () => {
    if (pag > 1) {
        pag -= 1;
        loadMovies();
    }
});

btnSig.addEventListener('click', () => {
    if (pag <= 500) {
        pag += 1;
    } else {
        pag = 1;
    }
    loadMovies();
})

logo.addEventListener('click', () => {
    pag = 1;
    loadMovies();
})

const loadMovies = async () => {
    paginationControl();
    const contenedor = document.querySelector('.contenedor');
    contenedor.classList.add('loading');
    contenedor.innerHTML = '';
    try {
        const res = await axios(`${url}&page=${pag}`)
        if (res.status === 200) {
            const data = res.data;
            let row = createRow();
            data.results.forEach((movie, index) => {
                if (index > 0 && index % 4 === 0) {
                    contenedor.appendChild(row);
                    row = createRow();
                }
                row.appendChild(buildMovieThumb(movie));
            });
            contenedor.classList.remove('loading');
        } else if (res.status === 400) {

            console.log("pagina no encontrada");

        }
    } catch (error) {
        console.error(error);
    }
}

const paginationControl = () => {
    pagina.innerHTML = pag;
    pag === 1 ? btnAnt.classList.add('hide') : btnAnt.classList.remove('hide');
    pag === 500 ? btnSig.classList.add('hide') : btnSig.classList.remove('hide');
}

const createRow = () => {
    const row = document.createElement('div');
    row.classList.add('row');
    return row;
}

const buildMovieThumb = (movie) => {
    const img = document.createElement('img');
    img.classList.add('poster');
    img.src = config.imgRootUrl + movie.poster_path;

    const title = document.createElement('h3');
    title.classList.add('title');
    title.textContent = movie.title;

    const thumb = document.createElement('div');
    thumb.classList.add('movie');

    if (movie.overview.length > 0) {
        const overviewP = document.createElement('p');
        overviewP.textContent = movie.overview.length > 550 ? movie.overview.substring(0, 550) + '...' : movie.overview;

        const voteAverage = document.createElement('div');
        voteAverage.classList.add('vote-average');
        voteAverage.textContent = movie.vote_average;

        const overview = document.createElement('div');
        overview.classList.add('overview');
        overview.appendChild(overviewP);
        overview.appendChild(voteAverage);
        thumb.appendChild(overview);
    }

    thumb.appendChild(img);
    thumb.appendChild(title);
    return thumb;
}

document.addEventListener("DOMContentLoaded", function (event) {
    loadMovies();
});