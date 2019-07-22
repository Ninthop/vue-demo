const state = {
    city: localStorage.city || '苏州'
}

let defaultCity = '苏州'
try {
    if(localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) {}

export default state