const slider=document.querySelector('.slider');

function activate(e){
    const item=document.querySelectorAll('.items');
    e.target.matches('.right') && slider.append(item[0]);
    e.target.matches('.left') && slider.prepend(item[item.length-1]);
}

document.addEventListener('click',activate,false);