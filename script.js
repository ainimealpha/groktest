// Ambil parameter dari URL (gambar utama)
const urlParams = new URLSearchParams(window.location.search);
const mainImgSrc = decodeURIComponent(urlParams.get('img'));
const imgId = urlParams.get('id');

// Set gambar utama
document.getElementById('main-img').src = mainImgSrc;

// Generate 3 gambar tambahan (placeholder acak berdasarkan ID)
const additionalImages = document.getElementById('additional-images');
for (let i = 1; i <= 3; i++) {
    const extraImg = document.createElement('img');
    extraImg.src = `https://picsum.photos/100/100?random=${parseInt(imgId) + i}`;
    extraImg.alt = `Tambahan ${i}`;
    extraImg.onclick = () => openModal(extraImg.src);
    additionalImages.appendChild(extraImg);
}

// Handle modal pop-up
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.getElementById('close-modal');

function openModal(src) {
    modal.style.display = 'block';
    modalImg.src = src;
}

closeModal.onclick = () => {
    modal.style.display = 'none';
};

// Close modal jika klik di luar gambar
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
