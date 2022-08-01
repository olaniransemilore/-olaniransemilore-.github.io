let p1 = document.querySelector('.play1')
let p2 = document.querySelector('.play2')
let p1Display = document.querySelector('#p1')
let p2Display = document.querySelector('#p2')
let reset = document.querySelector('#reset')
let win = document.querySelector('#playto')
let p1Score = 0
let p2Score = 0
let winningScore = 3
let isGameOver = false
let fufu = function(){
    isGameOver = false
    p1Score = 0
    p2Score = 0
    p1Display.textContent = 0
    p2Display.textContent = 0
    p1Display.classList.remove('has-text-success', 'has-text-danger')
    p2Display.classList.remove('has-text-success','has-text-danger' )
    p1.disabled = false;
    p2.disabled = false;
 }

win.addEventListener('change', function(){
    winningScore = parseInt(this.value)
    fufu();
})
p1.addEventListener('click', function () {
    if(!isGameOver){
    p1Score +=1;
    if(p1Score === winningScore){
        isGameOver = true
        p1Display.classList.add('has-text-success')
        p2Display.classList.add('has-text-danger')
        p1.disabled = true;
        p2.disabled = true;
    }
    p1Display.textContent = p1Score
    }
})
p2.addEventListener('click', function() {
    if(!isGameOver){
    p2Score +=1;
    if(p2Score === winningScore){
        isGameOver = true
        p2Display.classList.add('has-text-success')
        p1Display.classList.add('has-text-danger')
        p1.disabled = true;
        p2.disabled = true;
    }
    p2Display.textContent = p2Score
    }
}) 
reset.addEventListener('click', fufu)


