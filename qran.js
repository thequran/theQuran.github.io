const quranList = document.getElementById("quran_list");
const themeList = document.getElementById("forTheme");
const leftSurahList = document.querySelector("#leftSidebarSurahList");

const surahCheckBox = document.getElementById('surahs-checkbox');
const settingsCheckBox = document.getElementById('setting-checkbox');
const tajweedCheckbox = document.getElementById('tajweed-checkbox');



const contextMenuSurahCount = document.getElementById('ctx-surah-count');

const contextMenuAyahCount = document.getElementById('ctx-ayah-count');

let surahJsonArray = "";
let selectedTranscript = 'indopak';
let currentSurah = '';
let currentIndex;
let indexes = [];
let showTajweed = true;
let currentSurahItemJson = {};
let currentSelectedSurahButton = '';

//setLoadingInUI();






loadThemeSettings();

fetch("./api/surah.json")
  .then((response) => response.json())
  .then((data) => {
    surahJsonArray = data;
    loadSurahListCenter();
    loadSurahsIndexClickListener(indexes, selectedTranscript);
    loadSettingsListener();
    initDefaultSettings();
    hideLoadingInUI();

  });


// const loader = document.querySelector(".preloader");
// window.addEventListener("load", function () {
//   setTimeout(() => {
//     loader.style.display = 'none';
//   }, 1000);
// })



