const state = {
    city: localStorage.city || '苏州',
    attraction: '苏州乐园森林水世界'
}

let defaultCity = '苏州'
try {
    if(localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) {}

export default state