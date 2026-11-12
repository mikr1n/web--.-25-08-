const form = document.querySelector('#admission-form');
const message = document.querySelector('#form-message');
const fileInput = document.querySelector('#document');

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file && file.size > 10 * 1024 * 1024) {
    fileInput.setCustomValidity('Размер файла не должен превышать 10 МБ.');
    fileInput.reportValidity();
  } else {
    fileInput.setCustomValidity('');
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const firstName = form.elements.fullName.value.trim().split(/\s+/)[1] || 'абитуриент';
  message.textContent = `Спасибо, ${firstName}! Анкета заполнена. В учебной версии данные никуда не отправляются.`;
  message.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

form.addEventListener('input', () => {
  if (message.textContent) message.textContent = '';
});