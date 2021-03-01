let baseUrl =  'http://192.168.100.8:3001/';
let deployedServerUrl = 'http://188.34.187.30:39001/'

export function getAllCategories(data) {
    return fetch( deployedServerUrl + 'category/allCategory', data )
}

export function getAllCategoryRates(data) {
    return fetch( deployedServerUrl + 'rates/allCategoryRates', data )
}

export function register() {
    return fetch( deployedServerUrl + 'user/signup', data )
}