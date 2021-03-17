// Temp - Mock Api req


// STATE

export const state = () => ({

  classAnimation: false,

  theSettings: {},
  theMenu: {},
  theMenuColor: 'dark',
  theMenuFooter: {},
  theFooter: {},

  hero: false,
  heroShow: true,
  heros: {},

  isMenuOpen: false,


})


// MUTATIONS

export const mutations = {

  setClassAnimation(state, payload) {
    state.classAnimation = payload
  },


  // Singel loads
  setTheSettings(state, payload) {
    state.theSettings = payload
  },
  setTheMenu(state, payload) {
    state.theMenu = payload
  },
  setTheMenuColor(state, payload) {
    state.theMenuColor = payload
  },
  setTheMenuFooter(state, payload) {
    state.theMenuFooter = payload
  },
  setTheFooter(state, payload) {
    state.theFooter = payload
  },


  // Every page uses vuex to store Hero data.
  setHero(state, payload) {
    state.hero = payload
  },
  setHeroShow(state, payload) {
    state.heroShow = payload
  },
  setHeros(state, payload) {
    state.heros = payload
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


  },

  setHero(vuexContext, state) {
    vuexContext.commit('setHero', state)
  },
  setTheMenuColor(vuexContext, state) {
    vuexContext.commit('setMenuColor', state)
  },
  setHeroShow(vuexContext, state) {
    vuexContext.commit('setHeroShow', state)
  },
  setHeros(vuexContext, state) {
    vuexContext.commit('setHeros', state)
  },

  setClassAnimation(vuexContext, state) {
    vuexContext.commit('setClassAnimation', state)
  },

  setIsMenuOpen(vuexContext, state) {
    vuexContext.commit('setIsMenuOpen', state)
  }

}



// GETTERS

export const getters = {
  getClassAnimation(state) {
    return state.classAnimation
  },
  getTheSettings(state) {
    return state.theSettings
  },
  getTheMenu(state) {
    return state.theMenu
  },
  getTheMenuColor(state) {
    return state.theMenuColor
  },
  getTheMenuFooter(state) {
    return state.theMenuFooter
  },
  getTheFooter(state) {
    return state.theFooter
  },
  getHero(state) {
    return state.hero
  },
  getHeroShow(state) {
    return state.heroShow
  },
  getHeros(state) {
    return state.hero
  },

  getIsMenuOpne(state) {
    return state.isMenuOpen
  },


}
