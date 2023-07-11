// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.getElementById('modal');
const errorMessage = document.getElementById('modal-message');


document.addEventListener('DOMContentLoaded', () => {
  errorModal.classList.add('.hidden');
});

document.addEventListener('click', (event) => {
  const heart = event.target;
  if (heart.classList.contains('like-glyph')) {
    mimicServerCall()
      .then(() => {
        heart.classList.toggle('activated-heart');
        heart.classList.toggle('full-heart');
      })
      .catch(() => {
        errorMessage.textContent = 'Server Error. Please try again.';
        errorModal.classList.remove('.hidden');
        setTimeout(() => {
          errorModal.classList.add('.hidden');
        }, 3000);
      });
  } else if (heart.classList.contains('activated-heart')) {
    heart.classList.toggle('activated-heart');
    heart.classList.toggle('full-heart');
  }
});

describe("main.js", () => {
  it("contains a hidden modal", () => {
    let modal = document.querySelector('.hidden');
    expect(modal).to.not.equal(null);
  });
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
