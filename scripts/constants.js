
const wpmTile = document.querySelector(".tile_wpm");
const accuracyTile = document.querySelector(".tile_accuracy");
const timeTile = document.querySelector(".tile_time-remaining");
//text kısmı
const textAreaInput = document.querySelector(".text-area__input");
const textAreaText = document.querySelector(".text-area__text");


const resetButton = document.querySelector(".reset");


const keys = document.querySelectorAll(".key");


const word = document.querySelector("#word-template").content;



const validInputKeys =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz[];',./";

const ingoredkeys = ["Shift", "CapsLock"];

const punctuationOrSpace = ",.; ";

const paragraphs = [
  `söz çok göre yani öyle ara ama kadar içinde bilmek yüz para kendi beklemek son güzel olay bugün veya sonra başlamak birlikte en hal geçmek kullanılmak göre anne dönem yazmak etmek el birlikte önce için dönmek`,
  `ama siz ne büyük başlamak hemen daha kadın bir çıkmak en an hiç ses çünkü ve kitap tutmak sağlamak iki görmek hal an duymak bilgi kullanılmak başka üzerine bulmak görmek bunu sistem iç yemek için yani sormak`,
  `gelmek başlamak oldu göz iki sevmek ulaşım kadar anca su kapı özgür ev böyle neden yeni diğer ile başka karşı şimdi yol her siz insan yüz onlar yıl bunu yüzde sahip para alan geçmek o güzel hayat siz sonra her`,
  `özgür verilmek hayat çalışmak göstermek bütün son kullanılmak yine gece genç yeni kişi sevmek girmek ne tek an yapılmak söylemek onun adam devlet alt kullanılmak daha sevmek söylemek zor hemen burada ay çıkarmak`,
  `yol anlamak geçmek el dönmek kadın yüzde ad biri sıra bulmak şekil onun iç işte insan ürün olay önemli durum kadar zaman kullanmak içinde yemek bebek iç el iş verilmek yani değil an arı zaman çıkmak ses yaş`,
  `şimdi bırakmak genç atmak gerekmek çekmek kadın bunlar sistem göz artık konu zor uzun siz kim bir başka biraz yıl birlikte yemek taraf bunu kullanmak bulmak düşünmek göstermek su diğer yeni küçük söylemek bunun`,
  `ne hayat yüzde orta iş sorun etmek göre şekil bazı hiç öyle sıra yaş ön gelmek olay baba var güzel içinde hal çünkü kapı nasıl hep yan kadar sonuç ise söz yani bakmak o klavye yazılım kulaklık yapmak oldu bitecek`,
];

const getRandomParagraph = () => {
  return paragraphs[Math.floor(Math.random() * paragraphs.length)].split(" ");
};

export {
  wpmTile,
  accuracyTile,
  timeTile,
  textAreaInput,
  textAreaText,
  getRandomParagraph,
  validInputKeys,
  resetButton,
  paragraphs,
  ingoredkeys,
  keys,
  punctuationOrSpace,
};