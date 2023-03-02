const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function darkMode() {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  // console.log(': ', toggleIcon.children );
  toggleIcon.children[0].textContent = 'Dark Mode';

  // toggleIcon.children[1].classList.remove('fa-sun');
  // toggleIcon.children[1].classList.add('fa-moon');
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  
  // image1.src = 'img/undraw_proud_coder_dark.svg';
  // image2.src = 'img/undraw_feeling_proud_dark.svg';
  // image3.src = 'img/undraw_conceptual_idea_dark.svg';
  imageMode('dark');
}

function lightMode() {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  // console.log(': ', toggleIcon.children );
  toggleIcon.children[0].textContent = 'Light Mode';

  // toggleIcon.children[1].classList.remove('fa-moon');
  // toggleIcon.children[1].classList.add('fa-sun');
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  
  // image1.src = 'img/undraw_proud_coder_light.svg';
  // image2.src = 'img/undraw_feeling_proud_light.svg';
  // image3.src = 'img/undraw_conceptual_idea_light.svg';
  imageMode('light');
}

function switchTheme(e) {
  console.log("e.target.checked", e.target.checked);
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    lightMode();
  }
}

toggleSwitch.addEventListener('change', switchTheme);

// chick localStorage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    darkMode();
  }
}