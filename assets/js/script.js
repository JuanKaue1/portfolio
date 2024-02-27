const btn_js = document.querySelector('#btn_js');
const div_js = document.querySelector('#div_js');
const div2_js = document.querySelector('#div2_js');
const d_none = document.querySelector('.d-none');

btn_js.addEventListener('click', () => {
    if (div_js.style.filter === "blur(.1rem);") {
        d_none.style.display = "flex"; 
    }
})