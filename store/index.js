// Temp - Mock Api req


// STATE

export const state = () => ({

  classAnimation: false,

  theSettings: {},
  theMenu: {},
  theFooter: {},

  hero: {
    h1: 'Default Header 1 store',
    h2: 'Default Header 2 store',
    txt: 'Text 1 from store',
    color: null,
    image: null,
    svg: null,
    pattern: null
  },
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

    // Getting the footer from Prismic.io
    const footer = await this.$prismic.api.getSingle('footer')
    commit('setTheFooter', footer.data)

    // Getting the footer from Prismic.io
    // const heros = await this.$prismic.api.query('', { pageSize : 100 })
    // commit('setHeros', heros.results)

    // console.log(heros.results);

    // const heroTexts = []

    // heros.results.forEach((element, index) => {

    //   let _h = {}
    //   const hasHero = false


    //   if (hasHero) {
    //     _h = {
    //       heroText: false,
    //       id: element.id,
    //       uid: element.uid,
    //       color: null,
    //       image: null,
    //       svg: null,
    //       h1: null,
    //       h2: null,
    //       txt: null
    //     }
    //   } else {
    //     _h = {
    //       heroText: false,
    //       id: element.id,
    //       uid: element.uid,
    //       color: null,
    //       image: null,
    //       svg: null,
    //       h1: null,
    //       h2: null,
    //       txt: null
    //     }
    //   }



    //   heroTexts.push(_h)

    //   console.log('- - -');
    //   console.log(element.id);
    //   console.log(element.uid);
    //   console.log(element.data.body);

    // });

    // console.log('- - -');
    // console.log('- - -');
    // console.log(heroTexts);



  },

  setHero(vuexContext, state) {
    vuexContext.commit('setHero', state)
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
