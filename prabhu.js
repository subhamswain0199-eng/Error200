const signInCard = document.querySelector('.sign-in-card');
const signUpCard = document.querySelector('.sign-up-card');
const toSignUpBtn = document.getElementById('toSignUp');
const toSignInBtn = document.getElementById('toSignIn');

// Switch to Sign Up form
toSignUpBtn.addEventListener('click', (e) => {
  e.preventDefault();
  signInCard.classList.add('hidden');
  signUpCard.classList.remove('hidden');
});

// Switch to Login form
toSignInBtn.addEventListener('click', (e) => {
  e.preventDefault();
  signUpCard.classList.add('hidden');
  signInCard.classList.remove('hidden');
});