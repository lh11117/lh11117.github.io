function download() {
    document.getElementById('license-checkbox').checked = false;
    document.querySelector('.license-button.agree').disabled = true;
    document.querySelector('div.license').style.display='';
}