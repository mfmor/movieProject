const filmName = document.getElementById("title")
const filmDirector = document.getElementById("director")
const filmUrl = document.getElementById("url")
const filmForm = document.getElementById("film-form")
const tableFilmDatas = document.getElementById("films")
const clearBtn = document.getElementById("clear-films")



eventListeners()


function eventListeners() {
  filmForm.addEventListener("submit", addFilm)
  document.addEventListener("DOMContentLoaded", UI.loadStorage)
  tableFilmDatas.addEventListener("click", deleteFilm)
  clearBtn.addEventListener("click", clear)

}

function addFilm(e) {

  if (filmName.value === "" || filmDirector.value === "" || filmUrl.value === "") {
    console.log("hata")
    Storage.addUIFromStorage()
  }
  else {
    const newFilm = new Film(filmName.value, filmDirector.value, filmUrl.value)
    UI.addFromToUI(newFilm)
    Storage.addFromToStorage(newFilm)


  }

  UI.clearInputs(filmName, filmDirector, filmUrl)

  e.preventDefault()
}

function deleteFilm(e) {
  UI.deleteFilmFromUI(e)
  Storage.deleteFilmFromStorage(e)
}

function clear() {

  if (confirm("Silmek istediğinize emin misiniz?")) {
    UI.clearUI()
    Storage.clearStorage()
  }




}
