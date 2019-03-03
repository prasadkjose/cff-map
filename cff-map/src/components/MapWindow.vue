<template>
  <div v-if="Boolean(selectedStation)">
    <GoogleInfoWindow
      :position="selectedStation.geopos"
      :options="infoOptions"
      :opened="Boolean(selectedStation)"
      v-on="$listeners"
    >
      <div id="info-window">
        <div class="info-window-header">
          <div class="title">{{selectedStation.ort}}</div>
          <div class="subheading">{{selectedStation.adresse}}</div>
        </div>
        <a
          class="mail"
          :href="'mailto:' + selectedStation.mail"
        >{{selectedStation.mail}}</a>
        <services-icons :services="selectedStation.services" />
      </div>
    </GoogleInfoWindow>
  </div>
</template>
<script>
import ServicesIcons from './Icons.vue'

export default {
  props: {
    selectedStation: Object
  },
  components: {
    ServicesIcons
  },
  data() {
    return {
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      }
    }
  },
  methods: {
    onClose() {}
  }
}
</script>
<style>
#info-window {
  font-family: 'Lato', sans-serif;
  padding-right: 24px;
}

#info-window .info-window-header {
  margin-bottom: 16px;
}

#info-window .mail {
  line-height: 2.5;
  font-size: 1.2em;
  color: rgba(0, 0, 0, 0.54);
  text-decoration: none;
}
</style>
