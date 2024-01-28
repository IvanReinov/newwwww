'use strict';

const listImages = [
    {
        src: 'заставканачальная.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена1.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена2.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена3.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена4.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена5.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена6.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена7.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена8.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена9.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена10.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена11.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена12.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена13.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена14.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена15.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена16.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена17.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена18.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена19.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена20.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена21.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена21.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена22.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена23.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена24.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена25.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена26.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена27.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена28.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена29.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена30.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена31.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена32.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена33.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена34.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена35.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена36.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена37.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена38.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена39.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена40.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена41.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена42.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена43.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена44.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена45.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена46.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена47.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена48.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена49.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена50.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена51.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена52.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена53.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена54.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена545.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена55.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена56.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена57.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена58.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена59.jpg',
        nameImg: 'Воздушный шар',
    },

    {
        src: 'сцена60.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена61.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена62.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена63.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена64.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена65.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена66.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена67.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена68.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена69.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена70.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена71.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена72.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена73.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена74.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена75.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена76.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена77.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена78.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена79.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена80.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена81.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена82.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена83.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена84.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена85.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена86.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена87.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена88.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена89.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена90.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена91.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена92.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена93.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена94.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена95.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена96.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена97.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена98.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена99.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена100.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена101.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена102.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена103.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена104.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена105.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена106.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена107.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена108.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена109.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена110.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена111.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена112.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена114.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена113.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена115.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'бекстейдж6.jpg',
        nameImg: 'Воздушный шар',
    },

];

const img= document.querySelector('img');
const button = document.querySelector('button');

const setImg = (currentDataImg) => {
    img.src = currentDataImg.src;
    img.alt = currentDataImg.nameImg;
}

setImg(listImages[0]);

button.addEventListener('click', onChangeImg);

let count = 0;

function onChangeImg() {
    count += 1;
    setImg(listImages[count]);
}