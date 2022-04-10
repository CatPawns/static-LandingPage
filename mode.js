function scrollTrigger(selector , arg) {
  // Multiple element can have same class/selector,
  // so we are using querySelectorAll
  let els = document.querySelectorAll(selector);
  // The above `querySelectorAll` returns a nodeList,
  // so we are converting it to an array
  els = Array.from(els);
  // Now we are iterating over the elements array
  els.forEach(el => {
    // `addObserver function` will attach the IntersectionObserver to the element
    // We will create this function next
    addObserver(el, arg);
  })
}

function addObserver(el , arg){
  
let options = {
  root: null,
  rootMargin: '200px',
  threshold: 0
}
  // We are creating a new IntersectionObserver instance
  let observer = new IntersectionObserver((entries, observer) => { // This takes a callback function that receives two arguments: the elements list and the observer instance.
    entries.forEach(entry => {
      // `entry.isIntersecting` will be true if the element is visible
    if(entry.isIntersecting) {
      entry.target.classList.add(arg);

      return;
      // We are removing the observer from the element after adding the active class
    }else
    {
     //entry.target.classList.remove(arg);
      //observer.unobserve(entry.target, arg);
      
    }
  })
},options);
// Adding the observer to the element
observer.observe(el)
}

function setAnimation(){
  document.documentElement.style.setProperty('--animate-delay', '.2s');
const myImgs = document.querySelectorAll('.cc')
   let observer = new IntersectionObserver(entries => {
     let delay = 0;
  entries.forEach(entry => {
    delay = delay + 1;
    let t = 'animate__delay-';
    t = t.concat(delay.toString(), 's');
    console.log(t);
    if (entry.intersectionRatio > 0) {
      console.log('in the view');
      entry.target.classList.add('animate__animated','animate__fadeInUp', t);
    } else {
      
      console.log('out of view');
    }
  });
});

myImgs.forEach(image => {
  observer.observe(image);
});
}