export default {
  changeCity(state, city) {
    state.city = city
    // 当用户改变city的时候存进localStorage
    localStorage.city = city
  },
}
