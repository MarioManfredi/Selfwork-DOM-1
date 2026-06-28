
let paragraphs = document.querySelectorAll('p');
let changeColorBtn = document.querySelector('#changeColorBtn');
let changeText = document.querySelector('#changeText');
let changeParagraph = document.querySelector('#changeParagraph');

function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

changeColorBtn.addEventListener('click', ()=>{

    paragraphs.forEach( (paragraph)=>{

        paragraph.style.color = getRandomRgbColor();
    });
});

changeText.addEventListener('click', ()=>{

    paragraphs.forEach( (paragraph)=>{
        paragraph.style.fontWeight = 'bold';
    });
});

changeParagraph.addEventListener('click', ()=>{

    paragraphs.forEach( (paragraph)=>{
        paragraph.classList.toggle('paragraph-custom');
    });
});