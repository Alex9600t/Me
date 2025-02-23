const infoBtn = document.getElementById('infoBtn');
const infoModal = document.getElementById('infoModal');
const closeModal = document.getElementById('closeModal');
const rickBtn = document.getElementById('rickBtn');
const rickModal = document.getElementById('rickModal');
const closeRickModal = document.getElementById('closeRickModal');
const linksBtn = document.getElementById('linksBtn');
const linksModal = document.getElementById('linksModal');
const closeLinksModal = document.getElementById('closeLinksModal');

rickBtn.addEventListener('click', () => {
    rickModal.classList.add('active');
});

closeRickModal.addEventListener('click', () => {
    rickModal.classList.remove('active');
});

document.getElementById('RickRollBtn').addEventListener('click', () => {
    document.getElementById('RickRollModal').classList.add('active');
    rickModal.classList.remove('active');
});

linksBtn.addEventListener('click', () => {
    linksModal.classList.add('active');
});

closeLinksModal.addEventListener('click', () => {
    linksModal.classList.remove('active');
});