// Temp - Mock Api req


// STATE

export const state = () => ({

  hero: {},


})


// MUTATIONS

export const mutations = {

  setHero(state, payload) {
    state.hero = payload
  }



}


// ACTIONS

export const actions = {

  async nuxtServerInit({ commit }, context) {

    // console.log(context);

    // const apiMerchants = await fetch('https://purspotapi-dev.azurewebsites.net/api/shop/merchants')
    // .then(response => response.json())

    // commit('setMerchantList', apiMerchants)
    // commit('setAppDefaults', psTempData)

  },

  setHero(vuexContext, state) {
    vuexContext.commit('setHero', state)
  }

}



// GETTERS

export const getters = {
  getHero(state) {
    return state.hero
  },


}
