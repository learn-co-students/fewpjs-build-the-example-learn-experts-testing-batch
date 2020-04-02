// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('click', function(e) {
  mimicServerCall()
  .then(() => {
    if (e.target.innerText === FULL_HEART) {
      e.target.innerText = EMPTY_HEART;
      e.target.classList.remove("activated-heart");
    } else {
      e.target.innerText = FULL_HEART;
      e.target.classList.add("activated-heart");
    }
  })
  .catch(err => {
    let modal = document.getElementById("modal");
    modal.classList.remove("hidden");
    modal.innerText = err;
    setTimeout(function() {
      modal.classList.add("hidden");
    }, 5000);
  })
})


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
