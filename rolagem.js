const sections = document.querySelectorAll('.section');
const container = document.getElementById('container');

let currentSection = 0;
let isScrolling = false;
let lastScrollTime = 0;
const scrollDelay = 500;

function updateSections() {
  sections.forEach((section, index) => {
    section.style.transform = `translateY(${(index - currentSection) * 100}%)`;
    section.classList.toggle('active', index === currentSection);
  });
}

function scrollToSection(sectionIndex) {
  if (sectionIndex < 0 || sectionIndex >= sections.length) return;
  currentSection = sectionIndex;
  updateSections();
}

function handleWheelEvent(event) {
  const now = Date.now();

  if (now - lastScrollTime < scrollDelay || isScrolling) {
    return;
  }

  lastScrollTime = now;
  isScrolling = true;

  if (event.deltaY > 0) {
    if (currentSection < sections.length - 1) {
      scrollToSection(currentSection + 1);
    }
  } else {
    if (currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  }

  setTimeout(() => {
    isScrolling = false;
  }, scrollDelay);
}

function handleKeyDownEvent(e) {
  const now = Date.now();

  if (now - lastScrollTime < scrollDelay || isScrolling) {
    return;
  }

  lastScrollTime = now;
  isScrolling = true;

  if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
    if (currentSection < sections.length - 1) {
      scrollToSection(currentSection + 1);
    }
  } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
    if (currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  }

  setTimeout(() => {
    isScrolling = false;
  }, scrollDelay);
}

window.addEventListener('wheel', handleWheelEvent, { passive: true });
document.addEventListener('keydown', handleKeyDownEvent);

// Inicializa as posições das seções
updateSections();


function copiarEmail() {
  // Cria um elemento input para copiar o e-mail
  var email = document.getElementById("email");
  var tempInput = document.createElement("input");
  document.body.appendChild(tempInput);
  tempInput.value = email.innerText;
  tempInput.select();
  document.execCommand("copy"); // Comando para copiar para a área de transferência
  document.body.removeChild(tempInput);

  // Exibe um aviso para o usuário
  alert("E-mail copiado: " + email.innerText);
}