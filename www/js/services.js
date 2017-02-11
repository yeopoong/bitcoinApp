angular.module('starter.services', [])

.factory('Currencies', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var currencies = [
    { code: 'AUD', text: 'Australian Dollar', selected: true },
    { code: 'BRL', text: 'Australian Dollar', selected: false },
    { code: 'CAD', text: 'Australian Dollar', selected: true },
    { code: 'CNY', text: 'Australian Dollar', selected: true },
    { code: 'EUR', text: 'Australian Dollar', selected: true },
    { code: 'GBP', text: 'Australian Dollar', selected: true },
    { code: 'IDR', text: 'Australian Dollar', selected: false },
    { code: 'ILS', text: 'Australian Dollar', selected: false },
    { code: 'MXN', text: 'Australian Dollar', selected: true },
    { code: 'PLN', text: 'Australian Dollar', selected: false },
    { code: 'RUB', text: 'Australian Dollar', selected: true },
    { code: 'SEK', text: 'Australian Dollar', selected: false },
    { code: 'SGD', text: 'Australian Dollar', selected: false },
    { code: 'USD', text: 'Australian Dollar', selected: true },
    { code: 'ZAR', text: 'South African Rand', selected: false }
  ];

  return currencies;
});
