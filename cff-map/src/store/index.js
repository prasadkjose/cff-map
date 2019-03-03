import Vue from 'vue'
import Vuex from 'vuex'
import CFFClient from '../api/cff'
import { buildRecords, getStations } from '../model/stations'

Vue.use(Vuex)

const NUM_RECORDS = 10

const debug = process.env.NODE_ENV !== 'production'

const state = {
  stations: [],
  selected: null,
  MapPointerSelectionStates: {
    key:"Default Key",
    name:"Default Name",
    address:"Default Address",
    mail:"Default Mail",
    services:["Default Services"]
  }
}

const getters = {
  allStations: state => state.stations,
  selectedStation: state => state.selected
}

const actions = {
  getAllStations({ commit }) {
    const client = new CFFClient()
    client      
      .getStations(NUM_RECORDS)
      .then(stations => {
        commit('setStations', stations)
      })
      .catch(() => {
        throw new Error('cannot get stations')
      })
  },
  SelectionState(state, SelectionData){
    state.commit('SelectionState',SelectionData)         
  }
}

const mutations = {
  setStations(state, stations) {
    state.stations = stations
  },
  SelectionState(state, SelectionData){
    state.MapPointerSelectionStates.name = SelectionData.ort,
    state.MapPointerSelectionStates.key = SelectionData.plz,
    state.MapPointerSelectionStates.mail = SelectionData.mail,
    state.MapPointerSelectionStates.services = SelectionData.services,
    state.MapPointerSelectionStates.address = SelectionData.adresse      
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: debug
})
