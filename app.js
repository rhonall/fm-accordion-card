const accordion = document.getElementsByClassName('questions')
const accordionLogo = document.getElementsByClassName('accordion')
const answer = document.getElementsByClassName('answer')
const question = document.getElementsByClassName('question')

for (let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', () => {
        if(answer[i].style.maxHeight){
            answer[i].style.maxHeight = null
            question[i].style.fontWeight = 'normal'
            accordionLogo[i].classList.remove('accordion-up')
        } else {
            answer[i].style.maxHeight = answer[i].scrollHeight + 'px'
            question[i].style.fontWeight = 'bold'
            accordionLogo[i].classList.add('accordion-up')
        }
    })
}