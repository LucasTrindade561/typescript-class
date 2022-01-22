import isEmail from 'validator/lib/isEmail';
const SHOW_ERROR_MASSAGE = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (e: Event) {
  e.preventDefault();
  hideMassagesError(this);
  checkEmptyInput(username, email, password, password2);
  checkEmailInput(email);
  checkPassword(password, password2);
  if (shouldSend(this)) console.log('Form sent');
});

function hideMassagesError(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + SHOW_ERROR_MASSAGE)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MASSAGE));
}

function checkPassword(
  password: HTMLInputElement,
  password2: HTMLInputElement,
): void {
  if (password.value !== password2.value) {
    showErrorMassage(password, 'password is different');
    showErrorMassage(password2, 'password is different');
  }
}

function checkEmptyInput(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value)
      showErrorMassage(input, 'This field is empty, please put something');
  });
}

function checkEmailInput(emailInput: HTMLInputElement): void {
  if (!isEmail(emailInput.value))
    showErrorMassage(emailInput, 'Email is invalid');
}

function shouldSend(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll('.' + SHOW_ERROR_MASSAGE).forEach(() => (send = false));
  return send;
}

function showErrorMassage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MASSAGE);
}
