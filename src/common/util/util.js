const getYMD = (date) => {
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()
    return {year, month, day}
}

export {
    getYMD
}