const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginPopupBtn = document.querySelector('.btnLogin-popup');
const closeIcon = document.querySelector('.icon-close');

// Show wrapper when Login button clicked
loginPopupBtn.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    wrapper.classList.remove('active'); // show login form by default
});

// Close popup
closeIcon.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
});

// Switch to Register form
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

// Switch back to Login form
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});
