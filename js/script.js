let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header .navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.header .navbar a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// Modal Support Functionality
const modal = document.getElementById('support-modal');
const openModalBtns = document.querySelectorAll('.open-support');
const closeModalBtn = document.querySelector('.close-modal');
const copyBtn = document.getElementById('copy-btn');
const pixKeyInput = document.getElementById('pix-key');

openModalBtns.forEach(btn => {
    btn.onclick = () => {
        modal.style.display = 'flex';
    }
});

closeModalBtn.onclick = () => {
    modal.style.display = 'none';
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Copy PIX Key
copyBtn.onclick = () => {
    pixKeyInput.select();
    pixKeyInput.setSelectionRange(0, 99999); // For mobile
    navigator.clipboard.writeText(pixKeyInput.value);
    
    copyBtn.innerText = 'Copiado!';
    copyBtn.style.background = '#27ae60';
    
    setTimeout(() => {
        copyBtn.innerText = 'Copiar Chave';
        copyBtn.style.background = 'var(--main-color)';
    }, 2000);
}

console.log("DevKode Script Loaded!");