const mutations = {
    changeCity (state, city) {
        state.city = city
        try {
            localStorage.city = city
        } catch (error) {}
    },
    changeAttra (state, attraction) {
        state.attraction = attraction
        try {
            localStorage.attraction = attraction
        } catch (error) {}
    },
}

export default mutations