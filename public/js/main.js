const infoBtn = document.getElementById('infoBtn');
const infoModal = document.getElementById('infoModal');
const closeModal = document.getElementById('closeModal');

infoBtn.addEventListener('click', () => {
    infoModal.classList.add('active');
});

closeModal.addEventListener('click', () => {
    infoModal.classList.remove('active');
});