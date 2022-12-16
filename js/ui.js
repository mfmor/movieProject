class UI {
  constructor() {

  }
  static addFromToUI(film) {
   

    const filmListGroup = document.getElementById("films")

    filmListGroup.innerHTML += `<tr>
    <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
    <td>${film.title}</td>
    <td>${film.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>`

  }

  static clearInputs(inputFilmName, inputDirector, inputUrl) {

    inputFilmName.value = ""
    inputDirector.value = ""
    inputUrl.value = ""

  }

  static loadStorage() {
    let films = Storage.arrayFilm()


    const filmListGroup = document.getElementById("films")
    films.forEach(function (film) {
      filmListGroup.innerHTML += `<tr>
    <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
    <td>${film.title}</td>
    <td>${film.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>`
    })
  }

  static deleteFilmFromUI(e) {
    const filmList = document.getElementById("films").children

    for (let i = 0; i < filmList.length; i++) {
      if (e.target === filmList[i].children[3].children[0]) {
        filmList[i].remove()
      }
    }

  }

  static clearUI() {
    const filmListGroup = document.getElementById("films").children;

    for (let i = 0; i < filmListGroup.length; i++) {

      console.log(filmListGroup[i].innerHTML="")
    }


  }

}
