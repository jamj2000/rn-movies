
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500"

async function fetchData(path, page = 1) {
    const API_URL = `https://api.themoviedb.org/3/movie/${path}?page=${page}&language=es-ES&api_key=${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`

    const response = await fetch(API_URL)
    const data = await response.json()
    return data
}

async function fetchPerson(personId) {
    const API_URL = `https://api.themoviedb.org/3/person/${personId}?language=es-ES&api_key=${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`

    const response = await fetch(API_URL)
    const data = await response.json()
    return data
}


/*

EJEMPLOS:

- https://api.themoviedb.org/3/movie/now_playing?language=es-ES
- https://api.themoviedb.org/3/movie/popular?language=es-ES

- https://api.themoviedb.org/3/movie/122?language=es-ES 
- https://api.themoviedb.org/3/movie/238?language=es-ES

- https://api.themoviedb.org/3/movie/122/credits?language=es-ES 

La función fetchData recibe un argumento de tipo string.
Puede tener uno de los siguientes valores según la información a obtener:

LISTAS DE PELICULAS

- now_playing
- popular
- top_rate
- upcoming


PELICULA

- [id de la pelicula]


CASTING

- [id de la pelicula]/credits
*/




// ---------------------- MOVIES ----------------------

export async function getMovies(path, page = 1) {
    try {
        const data = await fetchData(path, page)
        // console.log(JSON.stringify(data, null, 2));

        const movies = data.results.map((movie) => ({
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            poster: BASE_IMAGE_URL + movie.poster_path,
            backdrop: BASE_IMAGE_URL + movie.backdrop_path,
            rating: movie.vote_average,
        }));

        // console.log(JSON.stringify(movies, null, 2));

        return movies
    } catch (error) {
        console.log(error)
        throw 'Cannot load now playing movies'
    }
}



// ---------------------- MOVIE ----------------------

export async function getMovie(movieId) {
    try {
        const movie = await fetchData(movieId);
        // console.log(`movie`, movie);

        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            poster: movie.poster_path
                ? BASE_IMAGE_URL + movie.poster_path
                : 'https://res.cloudinary.com/jamj2000/image/upload/v1763059096/poster.webp',
            backdrop: movie.backdrop_path
                ? BASE_IMAGE_URL + movie.backdrop_path
                : 'https://res.cloudinary.com/jamj2000/image/upload/v1763059097/backdrop.webp',
            rating: movie.vote_average,
            budget: movie.budget,
            duration: movie.runtime,
            genres: movie.genres.map((g) => g.name),
            originalTitle: movie.original_title,
            productionCompanies: movie.production_companies.map((c) => c.name),
        }
    } catch (error) {
        console.log(error);
        throw 'Cannot load movie';
    }
};

// MOVIE CASTING

export async function getMovieCast(movieId) {
    try {
        const data = await fetchData(`${movieId}/credits`);
        // console.log(JSON.stringify(data, null, 2));

        const casting = data.cast.map((actor) => ({
            id: actor.id,
            name: actor.name,
            character: actor.character ?? 'No character',
            avatar: actor.profile_path
                ? BASE_IMAGE_URL + actor.profile_path
                : 'https://res.cloudinary.com/jamj2000/image/upload/v1763059096/actor.webp', // esto en caso de no tener imagen
        }));

        // console.log(JSON.stringify(casting, null, 2));

        return casting
    } catch (error) {
        console.log(error);
        throw 'Cant load cast by movie id';
    }
};


// PERSON

export async function getPerson(personId) {
    try {
        const actor = await fetchPerson(personId);
        // console.log(JSON.stringify(actor, null, 2));

        return {
            id: actor.id,
            name: actor.name,
            popularity: actor.popularity,
            avatar: actor.profile_path
                ? BASE_IMAGE_URL + actor.profile_path
                : 'https://res.cloudinary.com/jamj2000/image/upload/v1763059096/actor.webp', // esto en caso de no tener imagen
            bornIn: actor.place_of_birth,
            birthday: actor.birthday,
            deathday: actor.deathday,
            biography: actor.biography,
        }
    } catch (error) {
        console.log(error);
        throw 'Cant load person info';
    }
};





