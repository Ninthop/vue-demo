const actions = {
    changeCity(ctx, city) {
        ctx.commit('changeCity', city)
    },
    changeAttra (ctx, attraction) {
        ctx.commit('changeAttra', attraction)
    }
}

export default actions