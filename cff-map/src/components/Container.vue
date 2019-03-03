
<script>

import Vue from 'vue'
import debounce from 'lodash/debounce'
import Map from './Map.vue'
import ListItem from './ListItem.vue'
import MapWindow from './MapWindow.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'
import { SWISS_GEOPOS } from '../constants'
import modal from "./MapSelectionBox.vue"
import Vuex from 'vuex'
import { buildRecords, getStations } from '../model/stations'
 
Vue.use(Vuex);
// import store from './VuexStore.vue'
import Store from './../store/index'


export default {
  data() {
    return {
      error: false,
      mapCenter: SWISS_GEOPOS,
      mapBounds: null,
      current:"ListItem",
      isModalVisible: false,
    }
  },
  components: {
    Map,
    ListItem,
    MapWindow,
    modal
  },
  computed: {
    visibleStations() {
      if (!this.mapBounds || !this.allStations.length) {
        return []
      }
      return this.allStations.filter(station => {
        const position = station.geopos
        return this.mapBounds.contains(position)
      })
    },
    ...mapGetters(['allStations', 'selectedStation']),
  },
  created() {
    this.debounceUpdateBounds = debounce(this.updateBounds, 500)
  },
  mounted() {
    this.getAllStations()

  },
  methods: {
    ...mapActions(['getAllStations']),
    ...mapMutations(['SelectionState']),
    updateBounds(event) {
      this.mapBounds = event
    },
    selection(event) {
      // TODO: Using Vuex store, add the selection of a station - Cf Adobe XD mockup regarding the impact of a selection
      Store.dispatch('SelectionState', event)
      this.isModalVisible = true;    
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
}
</script>

<template>
  <div>
    <!-- google map -->
    <section class="stations-map-container">
      <!-- Map pointer Selection box -->
     <modal
      v-show="isModalVisible"
      @close="closeModal"     
    />
      <Map
        :stations="allStations"
        :center="mapCenter"
        class="stations-map"
        @update_bounds="debounceUpdateBounds($event)"
        @marker_clicked="selection($event)"
        
      >
        <map-window :selectedStation="selectedStation" />
      </Map>
    </section>
    

    <!-- Error message -->
    <div
      v-if="error"
      class="error"
    >
      Woups! An error occured while loading data. Please try again later.
    </div>

    <!-- logo -->
    <div class="toolbar">
      <span class="body-1">Based on data from the</span>
      <img
        class="logo"
        src="../assets/sbb-logo.png"
        alt="sbb-logo"
      >
    </div>
    
      <section class="stations-list-container"  >
      <ListItem
        class="list-item"
        v-for="station in visibleStations"
        :key="station.id"
        :name="station.ort"
        :address="station.adresse"
        :mail="station.mail"
        :services="station.services"
        :is="current"
        @click="selection(station)"
        

        
      />
    </section>
    
  </div>
  
</template>

<style scoped>
.stations-map-container,
.stations-list-container {
  padding: 16px;
}

.stations-map-container {
  height: 380px;
  width: 100%;
}

.error {
  text-align: center;
  color: #f44336;
}

.toolbar {
  height: 48px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.logo {
  height: 16px;
  width: auto;
  margin-left: 8px;
}

.stations-map {
  height: 100%;
  width: 100%;
}

.list-item {
  margin-bottom: 16px;
}

</style>
