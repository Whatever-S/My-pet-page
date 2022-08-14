const mouse = document.querySelectorAll('.mouse');
const sadMouse = document.querySelector('#sadMouse');
const happyMouse = document.querySelector('#happyMouse');
const moods = document.querySelectorAll('input');
const likeBtn = document.querySelector('#like');
let likes = 0;
const likeCount = document.createElement('button');

mouse.forEach((mouseState)=>{
    
    mouseState.addEventListener('click', function(e){
       alert('Hello sweety!');
});
});


moods.forEach((item)=> {
    item.addEventListener('click',()=>{
        if(item.id === 'happy' && item.checked){
            item.onclick = happyMouse.classList.add('active');
            item.onclick = happyMouse.classList.remove('hide');
            item.onclick = sadMouse.classList.add('hide');
            item.onclick = sadMouse.classList.remove('active');
        } else if(item.id === 'sad' && item.checked){
            item.onclick = sadMouse.classList.add('active');
            item.onclick = sadMouse.classList.remove('hide');
            item.onclick = happyMouse.classList.add('hide');
            item.onclick = happyMouse.classList.remove('active');
        }      
    });
});

likeBtn.addEventListener('click', (e)=>{
    likes++;
    if( likes === 1){
        document.querySelector('.btns').append(likeCount);
        //likeCount.classList.add('activeBtn');
        likeCount.textContent = `${likes}`;
    } else{
        likeCount.textContent = `${likes}`;
    }
});