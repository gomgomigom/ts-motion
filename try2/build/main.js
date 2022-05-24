"use strict";
{
    const addModal = (e) => {
        console.log(e.path);
        console.log('haha');
    };
    const button = document.querySelectorAll('.btn');
    if (button != null) {
        console.log(button);
        button.forEach((item) => console.log(item));
        button.forEach(() => addEventListener('click', addModal));
    }
}
