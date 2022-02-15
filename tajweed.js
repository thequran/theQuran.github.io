
//   https://www.linkedin.com/in/hbappi/
//   https://www.facebook.com/hbappihp/
//   https://www.github.com/hbappi/

//const quranmatcher = new RegExp().compile("[01]?\\d?\\d:\\d?\\d?\\d"); //withtout brackets

//vowels
const fathah = '\u064e';
const dhamma = '\u064f';
const kasra = '\u0650';

const ya_hamza = '\u0626';
const joining_hamza = '\u0654';

const kasratain = '\u064d';
const fathatain = '\u064b';
const dammatain = '\u064c';
const shadda = '\u0651';
const space = ' ';

//arabic letters
const nun = '\u0646';
const mim = '\u0645';
const qaf = '\u0642';
const toa = '\u0637';
const ba = '\u0628';
const zim = '\u062c';
const dal = '\u062f';
const soad = '\u0635';
const zaal = '\u0630';
const tha = '\u062b';
const kaf = '\u0643';
const wow = '\u0648';
const shin = '\u0634';
const seen = '\u0633';
const zha = '\u0632';
const fa = '\u0641';
const ta = '\u062a';
const doad = '\u0636';
const zoa = '\u0638';
const ra = '\u0631';
const lam = '\u0644';
const indopak_kaf = '\u06a9';

//stop signs uthmani
const stop_sign_zim = '\u06da';
const stop_sign_lam = '\u06d9';
const stop_sign_high_seen = '\u06dc';
const stop_sign_mim = '\u06d8';
const stop_sign_three_dots = '\u06db';
const stop_sign_qaf_lam = '\u06d7';
const stop_sign_soad_lam = '\u06d6';

const low_seen = '\u06e3';

//sukuns
const sukun = '\u0652';
const curvy_sukun = '\u06e1';
const small_rounded_zero = '\u06df';

//others
const low_meem = '\u06ed';
const high_meem = '\u06e2';
const alif_hamza = '\u0627';
const empty_ya = alif_hamza;
const empty_alif = '\u0649';
const another_ya = '\u064a';
const ta_marbuta = '\u0647';
const supercript_alif_khara_fatha = '\u0670';
const small_waw_elongation = "\u06E5";
const small_ya_elongation = "\u06E6";
const tatweel_empty_letter = "\u0640";
const high_small_ya = "\u06E7";

const uthmani_stop_signs = "" + stop_sign_three_dots + stop_sign_zim + stop_sign_qaf_lam + stop_sign_soad_lam + stop_sign_lam + stop_sign_mim;



// static String gunnah = "إِنَّهَا عَلَيْهِم مُّؤْصَدَةٌ ";
//   static String ikhfa = "تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ";
//  // static String idhgham = " الَّذِي أَطْعَمَهُم مِّن جُوعٍ وَآمَنَهُم مِّنْ خَوْفٍ";
//  // static String idhghamwithoutgunnah = "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ";
//   static String iqlab = "كَذَّبَتْ ثَمُودُ وَعَادٌۢ بِالْقَارِعَةِ";
//  // static String qalqala = "لَمْ يَلِدْ وَلَمْ يُولَدْ";


//matcher

const idhghammatcher = new RegExp().compile("([" + nun + fathatain + dammatain + kasratain + "][" + sukun + curvy_sukun + empty_ya + empty_alif + "]?[" + uthmani_stop_signs + "]?" + space + "[" + nun + mim + another_ya + wow + "]" + shadda + "?)|" + mim + "[" + uthmani_stop_signs + sukun + curvy_sukun + "]?" + space + mim);
const idhghammatcherwihtoutgunnah = new RegExp().compile("[" + nun + kasratain + fathatain + dammatain + "][" + sukun + curvy_sukun + empty_ya + empty_alif + "]?[" + uthmani_stop_signs + "]?" + space + "[" + ra + lam + "]");
const ikhfamatcher = new RegExp().compile("([" + nun + kasratain + fathatain + dammatain + "][" + sukun + curvy_sukun + empty_ya + empty_alif + "]?[" + uthmani_stop_signs + "]?" + space + "?[" + soad + zaal + tha + kaf + zim + shin + qaf + seen + dal + toa + zha + fa + ta + doad + zoa + indopak_kaf + "])|" + mim + "[" + sukun + curvy_sukun + "]?" + space + "?" + ba);

const hamzawaslmatcher = new RegExp().compile("[" + nun + "|" + mim + "]" + shadda);
const lastelongationmatcher = new RegExp().compile("[" + nun + "|" + mim + "]" + "$");
const onemaadmatcher = new RegExp().compile("[" + nun + "|" + mim + "]" + shadda);
const threemaadmatcher = new RegExp().compile("[" + nun + "|" + mim + "]" + shadda);

//thick letters such as qaf, lam, soad, kha
const thicklettermatcher = new RegExp().compile("[" + nun + "|" + mim + "]" + shadda);



function getTajweedFilteredText(text) {
    //  gunnahmatcher.reset(text);

    //  while (gunnahmatcher.find()) {
    //            Timber.d("gunnah Found " + gunnahmatcher.group(), "starting at " + gunnahmatcher.start() + " and ending at " + gunnahmatcher.end());
    //text.setSpan(new ForegroundColorSpan('#f11'), gunnahmatcher.start(), getEnd(s, gunnahmatcher.end()), 0);
    //}

    //text = ' عَلَيْهِ' + nunSadda + 'عَلَيْهِ' + nunSadda +' عَلَيْهِ' + nunSadda +'عَلَيْه' ;

var output = text;

     output = getGunnahMatchedFilter(text);




     return output;
}

function getGunnahMatchedFilter(text) {

    const nunShadda = nun + shadda;
    const mimShadda = mim + shadda;

    var result = text;

    result = new String(result).replaceAll(nunShadda, 
        `<font class="nunshadda">`+nunShadda+`</font>`
        );

    return result;

}
function getIqlabMatcher(text) {
    const iqlabmmatcher = new RegExp().compile("[" + high_meem + low_meem + "][" + sukun + curvy_sukun + empty_ya + empty_alif + "]?[" + uthmani_stop_signs + "]?" + space + "?" + ba);

    
    

}
function getQalqalaMatchedFilter(text) {
    const qalqalamatcher = new RegExp().compile("[" + qaf + toa + ba + zim + dal + "](" + sukun + "|" + curvy_sukun + "|[^" + ta_marbuta + "]?[^" + ta_marbuta + empty_alif + empty_ya + "]?[^" + ta_marbuta + empty_alif + alif_hamza + "]$)");

    

}