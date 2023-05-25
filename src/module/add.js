const addFunction = async () => {
  const form = document.getElementById('form');
  const playerName = document.getElementById('name').value;
  const gameScores = document.getElementById('score').value;

  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/rTZm7CPK9IvpQgjAdeY7/scores/', {
      method: 'POST',
      body: JSON.stringify({
        score: gameScores,
        user: playerName,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    form.reset();

    if (response.ok) {
      return ('Data added successfully.');
    }
    throw new Error('Unable to add score.');
  } catch (error) {
    throw new Error(`Unable to add score. Error: ${error}`);
  }
};

export default addFunction;