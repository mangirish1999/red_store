let h1 = document.querySelector('h1');
let explore = document.querySelector('#explore');

// h1.addEventListener('click', () => {
//     h1.style.color = "purple";

//     setTimeout(() => {
//         h1.style.color = "";
//     }, 500)
// }, false)


// explore.addEventListener('hover', () => {
//     explore.classList.toggle('text-dark');
//     explore.classList.add('text-light');



// })


let productimg = document.querySelector('#productimg');
let smallimg = document.querySelectorAll('.small-img');

smallimg[0].onclick = function () {
    productimg.src = smallimg[0].src;
}
smallimg[1].onclick = function () {
    productimg.src = smallimg[1].src;
}
smallimg[2].onclick = function () {
    productimg.src = smallimg[2].src;
}
smallimg[3].onclick = function () {
    productimg.src = smallimg[3].src;
}



const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
