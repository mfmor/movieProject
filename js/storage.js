class Storage {
  constructor() {

  }

  static arrayFilm() {
    let film;

    if (localStorage.getItem("films") == null) {
      film = []
    }
    else (
      film = JSON.parse(localStorage.getItem("films")) //filmleri arraye çevirir
    )

    return film
  }


  static addFromToStorage(films) {

    let film = this.arrayFilm()

    film.push(films)
    localStorage.setItem("films", JSON.stringify(film))

  }


  static deleteFilmFromStorage(e) {

    let films = Storage.arrayFilm()
    const filmName = e.target.parentElement.previousElementSibling.previousElementSibling.textContent


    films.forEach(function (film, index) {
      if (film.title === filmName) {
        films.splice(index, 1)
      }

    });

    localStorage.setItem("films", JSON.stringify(films))
  }

  static clearStorage() {
    
    localStorage.removeItem("films")
  }
}


