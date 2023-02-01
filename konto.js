function onLoad() {
  const idKonta = parseInt(window.location.search.split('?idkonta=')[1]);

  const daneOKliencie = JSON.parse(localStorage.getItem('klienci')).find(klient => klient.id === idKonta);
  if(daneOKliencie === undefined) {
    window.location.href = 'logowanie.html?error=1';
  }
  document.getElementById("konto_klienta").innerHTML = `Konto klienta: ${daneOKliencie.id}`;
  document.getElementById("konto_imie").innerHTML = `Imię: ${daneOKliencie.imie}`;
  document.getElementById("konto_nazwisko").innerHTML = `Nazwisko: ${daneOKliencie.nazwisko}`;
  document.getElementById("konto_saldo").innerHTML = `Saldo: ${daneOKliencie.saldo}`;
}