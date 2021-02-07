let baseUrl =  'http://192.168.100.8:3001/';

export function getAllRates(data) {
    return fetch( baseUrl + 'rates/allRates', data )
}