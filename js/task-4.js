const form = document.querySelector('form');

function submitHandler(event) {
  event.preventDefault();
  const login = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  if (login === '' || password === '') {
    return alert('All forms fields must be filled in');
  }

  const value = {
    email: login,
    password: password,
  };
  console.log(value);
  form.reset();
}
form.addEventListener('submit', submitHandler);
