const state = {
    city: localStorage.city || '苏州',
    attraction: '苏州乐园森林水世界',
    decr: '景点门票',
    date: new Date()
}

let defaultCity = '苏州'
try {
    if(localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) {}

export default state