const division = document.getElementById('todoContainer');
const button = document.querySelector('button');
const noTodosMessage = document.createElement('p');
noTodosMessage.textContent = 'No todos left, Enjoy your day!!!';
division.appendChild(noTodosMessage);

button.addEventListener('click', function (e) {
  e.preventDefault();
  const para = document.createElement('p');
  const dlt = document.createElement('button');
  const inputValue = document.querySelector('input');
  const section = document.createElement('div');
  section.id = "sectionList"
  const edit = document.createElement('button');
  edit.id = 'editBtn';

  if (inputValue.value.trim().length === 0) {
    alert('Empty fields are not allowed');
  } else {
    // Append the section to the division
    division.appendChild(section);

    // Append elements to the section
    section.appendChild(para);
    section.appendChild(edit);
    section.appendChild(dlt);

    para.textContent = inputValue.value;
    dlt.innerText = 'Delete';
    edit.innerText = 'Edit';

    // Reset the input field and set focus
    inputValue.value = '';
    inputValue.focus();

    noTodosMessage.style.display = 'none';

    // Delete functionality
    dlt.addEventListener('click', () => {
      section.remove();
      checkNoTodos();
    });

    // Edit functionality
    edit.addEventListener('click', () => {
      const editInput = document.createElement('input');
      const save = document.createElement('button');
      const cancel = document.createElement('button');
      editInput.value = para.textContent;
      save.innerText = 'Save';
      cancel.innerText = 'Cancel';

      // Replace paragraph, edit and Delete button with input, save and Cancel button
      section.replaceChild(editInput, para);
      section.replaceChild(save, edit);
      section.replaceChild(cancel, dlt);

      // Save functionality
      save.addEventListener('click', () => {
        if (editInput.value.trim().length === 0) {
          alert('Empty fields are not allowed');
        } else {
          para.textContent = editInput.value;
          section.replaceChild(para, editInput);
          section.replaceChild(edit, save);
          section.replaceChild(dlt, cancel);
        }
      });

      // Cancel functionality
      cancel.addEventListener('click', () => {
        section.replaceChild(para, editInput);
        section.replaceChild(edit, save);
        section.replaceChild(dlt, cancel);
      });
    });
  }
});

// Function to check if there are no todos left
function checkNoTodos() {
  if (division.children.length === 1) {
    // Only the message element is present
    noTodosMessage.style.display = 'block';
  }
}

checkNoTodos();
