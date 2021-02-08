import { createStore } from 'vuex'
import dataBase from './modules/dataBase'


export default createStore({ 
  modules: {
		dataBase
  }
})
