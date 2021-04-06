let baseUrl =  'http://192.168.100.8:3001/';
let deployedServerUrl = 'http://188.34.187.30:39001/'

export function getAllCategories() {
    return fetch( deployedServerUrl + 'category/allCategory')
}

export function getAllCategoryRates(data) {
    return fetch( deployedServerUrl + 'rates/allCategoryRates', data )
}

export function getAllPlans() {
    return fetch( deployedServerUrl + 'plan/allPlans')
}

export function register() {
    return fetch( deployedServerUrl + 'user/signup', data )
}

export function login(data) {
    console.log("req params :; ", data)
    return fetch( deployedServerUrl + 'user/signin', data )
}