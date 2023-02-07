const listaKlientow = [
  {
    id: 1,
    imie: 'Jan',
    nazwisko: 'Nowak',
    nrKonta: '001',
    saldo: 1457.23,
  },
  {
    id: 2,
    imie: 'Anna',
    nazwisko: 'Kowalska',
    nrKonta: '002',
    saldo: 991.23,
  },
  {
    id: 3,
    imie: 'Grzegorz',
    nazwisko: 'Braun',
    nrKonta: '003',
    saldo: 551.23,
  },
  {
    id: 4,
    imie: 'Maciek',
    nazwisko: 'Was',
    nrKonta: '004',
    saldo: 5151.23,
  },
  {
    id: 5,
    imie: 'Martyna',
    nazwisko: 'Kolodziej',
    nrKonta: '005',
    saldo: 8907.23,
  },
];

const klienci = localStorage.getItem('klienci');
if (klienci == null) {
  localStorage.setItem('klienci', JSON.stringify(listaKlientow));
}
