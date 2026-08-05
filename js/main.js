// Slider Script
const roomsSlider = document.querySelector('.snap-x');
if (roomsSlider) {
    let isDown = false;
    let startX;
    let scrollLeft;

    roomsSlider.addEventListener('mousedown', (e) => {
        isDown = true;
        roomsSlider.style.cursor = 'grabbing';
        startX = e.pageX - roomsSlider.offsetLeft;
        scrollLeft = roomsSlider.scrollLeft;
    });
    roomsSlider.addEventListener('mouseleave', () => {
        isDown = false;
        roomsSlider.style.cursor = 'grab';
    });
    roomsSlider.addEventListener('mouseup', () => {
        isDown = false;
        roomsSlider.style.cursor = 'grab';
    });
    roomsSlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - roomsSlider.offsetLeft;
        const walk = (x - startX) * 2;
        roomsSlider.scrollLeft = scrollLeft - walk;
    });
}
