import { getAuthors } from '../../helpers/data/authorData';

const selectAuthor = () => {
  let domString = `<label for="author">Select an Author</label>
    <select class="form-control" id="author" required>
    <option value="">Select an Author</option>`;

  getAuthors().then((authorsArray) => {
    authorsArray.forEach((author) => {
      domString += `<option value="${author.firebaseKey}">${author.first_name} ${author.last_name}</option>`;
    });

    domString += '</select>';

    document.querySelector('#select-author').innerHTML = domString;
  });
};

export default selectAuthor;
