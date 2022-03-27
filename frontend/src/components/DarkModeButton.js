
// Funktion Menü bei Handyansicht: 
/*function openNav() {
  var x = document.getElementById("sidebar");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}*/


// Variabeln Darkmode:
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

// Modus von Besuch zuvor laden
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

// Modus switch bei Knopfdruck
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}
toggleSwitch.addEventListener('change', switchTheme, false);

