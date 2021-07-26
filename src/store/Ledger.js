import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      data:[  
      ]
          

  },
  getters:{
      ledgers: (state) => state.data,
  },
  mutations: {
      fetch (state, { res }){
          state.data = res.data
      },
      add(state, { payload }){
          state.data.push(payload)
      },
      edit(state, { payload }){
          state.data[payload.index].date = payload.date
          state.data[payload.index].particular = payload.particular
          state.data[payload.index].credit = payload.credit
      }
  },
  actions: {
      fetchLedger ({ commit }){
          let res = {
            data:[
                {
                    date: '23/07/21',
                    action: 'Deposit',
                    particular: 'sister give',
                    credit: '800',
                    
                },
                {
                    date: '24/07/21',
                    action: 'Withdraw',
                    particular: 'eat buffet',
                    credit: '499',
                    
                },
                {
                  date: '24/08/21',
                  action: 'Deposit',
                  particular: 'mom give',
                  credit: '500',
                  
              }
                
            ]
          }
          commit('fetch', { res })

      },

      addLedger({ commit }, payload){
          commit('add', { payload })
      }
  },
  modules: {
  }
})
