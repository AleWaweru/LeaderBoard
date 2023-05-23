export default function displayItem() {
  const scoreCard = [
    {
      name: 'Alex : 100 ',
    },
    {
      name: 'Peter : 30 ',
    },
    {
      name: 'John : 80 ',
    },
    {
      name: 'Ann : 70 ',
    },
    {
      name: 'Mary : 40 ',
    },
  ];

  let html = '<table >';

  setTimeout(() => {
    for (let i = 0; i < scoreCard.length; i += 1) {
      html += '<tr>';
      html += `<td>${scoreCard[i].name}</td>`;
      html += '</tr>';
    }
    document.getElementById('display-items').innerHTML = html;
  }, 500);
}