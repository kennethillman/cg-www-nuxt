// Temp - Mock Api req


// STATE

export const state = () => ({

  theSettings: {},
  theMenu: {},
  theFooter: {},

  hero: {
    header1: 'hero 1',
    header2: 'hero 2',
    text: 'hero text'
  },

  isMenuOpen: false,


})


// MUTATIONS

export const mutations = {


  // Singel loads
  setTheSettings(state, payload) {
    state.theSettings = payload
  },
  setTheMenu(state, payload) {
    state.theMenu = payload
  },
  setTheFooter(state, payload) {
    state.theFooter = payload
  },


  // Every page uses vuex to store Hero data.
  setHero(state, payload) {
    state.hero = payload
  },

  setIsMenuOpen(state, payload) {
    state.isMenuOpen = payload
  },


}


// ACTIONS

export const actions = {

  async nuxtServerInit({ commit }) {

    // Getting the default settings and info from Prismic.io
    const settings = await this.$prismic.api.getSingle('settings')
    commit('setTheSettings', settings.data)

    // Getting the menu from Prismic.io
    const menu = await this.$prismic.api.getSingle('menu')
    commit('setTheMenu', menu.data.menu_links)

    // Getting the footer from Prismic.io
    const footer = await this.$prismic.api.getSingle('footer')
    commit('setTheFooter', footer.data)

  },

  setHero(vuexContext, state) {
    vuexContext.commit('setHero', state)
  },

  setIsMenuOpen(vuexContext, state) {
    vuexContext.commit('setIsMenuOpen', state)
  }

}



// GETTERS

export const getters = {
  getTheSettings(state) {
    return state.theSettings
  },
  getTheMenu(state) {
    return state.theMenu
  },
  getTheFooter(state) {
    return state.theFooter
  },
  getHero(state) {
    return state.hero
  },

  getIsMenuOpne(state) {
    return state.isMenuOpen
  },


}
