const container = document.getElementsByClassName('image-cont');
const imageWrapper = document.getElementsByClassName('image-wrapper');
const separatorImg = document.getElementsByClassName('separator');

function revealImages(indicator, e) {
    const rect = container[indicator].getBoundingClientRect();
    const x = e.clientX - rect.left;

    const porcentaje = (x / rect.width) * 100;

    if (porcentaje > 0 && porcentaje < 100) {
        imageWrapper[indicator].style.clipPath = `polygon(0% 0%, ${porcentaje}% 0%, ${porcentaje}% 100%, 0% 100%)`;
        separatorImg[indicator].style.left = `${porcentaje}%`;
    }
}

addEventListener('resize', () => {
    const logoGm = document.getElementById('logoGm');
    window.innerWidth < 720 ? logoGm.src = 'src/icon-gm-p.png' : (() => {
        document.body.classList.contains("dark-mode") ? logoGm.src = "src/logo-gm-dark.png" : logoGm.src = "src/logo-gm-light.png";
    })();
});