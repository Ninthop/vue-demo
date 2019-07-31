const actions = {
    changeCity(ctx, city) {
        ctx.commit('changeCity', city)
    },
    changeAttra (ctx, attraction) {
        ctx.commit('changeAttra', attraction)
    },
    changeIcons (ctx, decr) {
        ctx.commit('changeIcons', decr)
    },
    changeDate (ctx, date) {
        ctx.commit('changeDate', date)
    }
}

export default actions