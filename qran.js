const quranList = document.getElementById("quran_list");
const themeList = document.getElementById("forTheme");
const leftSurahList = document.querySelector("#leftSidebarSurahList");

const surahCheckBox = document.getElementById('surahs-checkbox');
const settingsCheckBox = document.getElementById('setting-checkbox');
const tajweedCheckbox = document.getElementById('tajweed-checkbox');



const contextMenuSurahCount = document.getElementById('ctx-surah-count');

const contextMenuAyahCount = document.getElementById('ctx-ayah-count');

let surahJsonArray = "";
let currentSurah = '';
let currentIndex;
let indexes = [];
let mainTheme;
let currentSurahItemJson = {};
let currentSelectedSurahButton = '';

//settings to save with cookies and get with cookies...

let arabicFontSize = '26px';
let arabicFontStyle = 'normal';
let arabicFontWeight = 'normal';
let arabicFontFace = 'noorehidayat';
let showTajweed = true;
let selectedTranscript = 'indopak';
let usersTheme = {
  'name': 'dark-orange',
  'bg': 'rgb(82, 37, 16)',
  'content': 'rgb(192, 73, 29)',
  'text': 'rgb(255, 255, 255)',
  'text-2': 'rgb(241, 188, 127)'
};



// if (usersTheme == null) {
//   usersTheme = defaultTheme;
// }
// if (mainTheme == null) {
//   mainTheme = usersTheme;
// }

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



