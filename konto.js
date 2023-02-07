let daneOKliencie;
const daneOKlientach = JSON.parse(localStorage.getItem('klienci'));
console.log(daneOKlientach);

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
  const kwotaPrzelewu = parseFloat(document.getElementById('przelew_kwota').value);
  const numerKonta = document.getElementById('przelew_numer_konta').value;
  console.log(typeof kwotaPrzelewu);
  console.log(typeof daneOKliencie.saldo);

  if(kwotaPrzelewu > daneOKliencie.saldo) {
    alert('Nie masz wystarczającej kwoty!');
    return;
  }

  if(numerKonta === daneOKliencie.nrKonta) {
    alert('Nie możesz wykonać przelewu do siebie!');
    return;
  } 

  const odbiorcaPrzelewu = daneOKlientach.find((klient) => {
    return klient.nrKonta == numerKonta
  })
  
  if(odbiorcaPrzelewu === undefined ) {
    alert('Nie ma takiego odbiorcy!');
    return;
  }
  
  daneOKlientach[daneOKliencie.id-1].saldo = (parseFloat(daneOKlientach[daneOKliencie.id-1].saldo) - kwotaPrzelewu).toFixed(2);
  daneOKlientach[odbiorcaPrzelewu.id-1].saldo = (parseFloat(daneOKlientach[odbiorcaPrzelewu.id-1].saldo) + kwotaPrzelewu).toFixed(2);

  localStorage.setItem('klienci', JSON.stringify(daneOKlientach));
  alert('Przelew wykonany')
  window.location.reload();
}

