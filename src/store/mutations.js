const mutations = {
    changeCity (state, city) {
        state.city = city
        try {
            localStorage.city = city
        } catch (error) {}
    },
    changeAttra (state, attraction) {
        state.attraction = attraction
    },
    changeIcons (state, decr) {
        state.decr = decr
    },
    changeDate (state, date) {
        state.date = date
    }
}

export default mutations