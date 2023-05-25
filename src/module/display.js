const displayScores = async () => {
  const listItems = document.getElementById('display-items');

  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/rTZm7CPK9IvpQgjAdeY7/scores/');

    if (response.ok) {
      const data = await response.json();

      listItems.innerHTML = '';
      const items = data.result;
      items.forEach((item, i) => { // pass the index as the second parameter
        const scoreItem = document.createElement('li');
        scoreItem.textContent = `${item.user}: ${item.score}`;

        if (i % 2 !== 0) { // use the index to check if it's odd or even
          scoreItem.classList.add('odd');
        }

        listItems.appendChild(scoreItem);
      });
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Unable to display items. Error: ${error}`);
  }
};

export default displayScores;