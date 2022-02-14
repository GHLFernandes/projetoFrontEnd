const onFocusEmail = () => {

    var input = document.getElementById('inputEmail');

    input.classList.remove("border");
    input.classList.add("border-left-3");
}

const onBlurEmail = () => {
    var input = document.getElementById('inputEmail');

    input.classList.remove("border-left-3");
    input.classList.add("border");
}

const onFocusPass = () => {
    var input = document.getElementById('inputPass');


    input.classList.remove("border");
    input.classList.add("border-left-3");
}

const onBlurPass = () => {

    var input = document.getElementById('inputPass');


    input.classList.remove("border-left-3");
    input.classList.add("border");
}