
//Première animation js
const ratio = .1;

const options ={
    root:null,
    rootMargin:'0px',
    threshold:ratio
}


const handleIntersect = function(entries,observer){
    entries.forEach(function(entry){
        if(entry.intersectionRatio>ratio){
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
        }
        console.log(entry.intersectionRatio);
    })
}

const observer = new IntersectionObserver(handleIntersect,options);
document.querySelectorAll('.reveal').forEach(function (r){
    observer.observe(r);
})


//Deuxième animation js
let mesProjets = document.querySelectorAll('.image img');
console.log(mesProjets);
                
for(let i = 0 ; i < mesProjets.length ; i++ ){
    mesProjets[i].addEventListener('mouseenter', function(){
        this.classList.add("animate__animated", "animate__shakeX");

        this.addEventListener('mouseout', function(){
        this.classList.remove("animate__animated", "animate__shakeX");
        })
    })
}



//Utilisation de la librairie confetti.js
document.querySelector('#mecontacter').addEventListener('click',function(){
    confetti();
})

document.querySelector('#cvpdf').addEventListener('click',function(){
    confetti();
})