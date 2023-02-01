const listaKlientow = JSON.parse(localStorage.getItem('klienci'));

function wyswieltTabeleKlientow() {
  let wnetrzeTabeli = `
  <tr>
  <th>Imie</th>
  <th>Nazwisko</th>
  <th>Numer konta</th>
  <th>Saldo</th>
</tr>
`;

  for (const klient of listaKlientow) {
    wnetrzeTabeli += `
  <tr>
    <td>${klient.imie}</td>
    <td>${klient.nazwisko}</td>
    <td>${klient.nrKonta}</td>
    <td>${klient.saldo}</td>
  </tr>
  `;
  }

  document.getElementById('wnetrze_tabli_klientow').innerHTML = wnetrzeTabeli;
}
