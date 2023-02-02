let daneOKliencie;
const daneOKlientach = JSON.parse(localStorage.getItem('klienci'));

function onLoad() {
  const idKonta = parseInt(window.location.search.split('?idkonta=')[1]);

  daneOKliencie = JSON.parse(localStorage.getItem('klienci')).find(klient => klient.id === idKonta);
  if(daneOKliencie === undefined) {
    window.location.href = 'logowanie.html?error=1';
  }
  document.getElementById("konto_klienta").innerHTML = `Konto klienta: ${daneOKliencie.id}`;
  document.getElementById("numer_konta").innerHTML = `Konto klienta: ${daneOKliencie.nrKonta}`;
  document.getElementById("konto_imie").innerHTML = `Imię: ${daneOKliencie.imie}`;
  document.getElementById("konto_nazwisko").innerHTML = `Nazwisko: ${daneOKliencie.nazwisko}`;
  document.getElementById("konto_saldo").innerHTML = `Saldo: ${daneOKliencie.saldo}`;
}


function przelew() {
  const kwotaPrzelewu = document.getElementById('przelew_kwota').value;
  const numerKonta = document.getElementById('przelew_numer_konta').value;

  if(kwotaPrzelewu >= daneOKliencie.saldo) {
    alert('Nie masz wystarczającej kwoty!');
    return;
  }

  const odbiorcaPrzelewu = daneOKlientach.find((klient) => {
    return klient.nrKonta == numerKonta
  })

  if(odbiorcaPrzelewu === undefined ) {
    alert('Nie ma takiego odbiorcy!');
    return;
  }
  console.log(daneOKlientach);
  console.log(daneOKlientach[daneOKliencie.id]);
  daneOKlientach[daneOKliencie.id].saldo = daneOKlientach[daneOKliencie.id].saldo - kwotaPrzelewu;
  daneOKlientach[odbiorcaPrzelewu.id].saldo = parseFloat(parseFloat(daneOKlientach[odbiorcaPrzelewu.id].saldo) + parseFloat(kwotaPrzelewu)).toFixed(2);

  localStorage.setItem('klienci', JSON.stringify(daneOKlientach));
  alert('Przelew wykonany')
  window.location.reload();
}

