<script>
export default {
  props: {
    stations: Array,
    center: Object
  }
}
</script>

<template>
  <GoogleMap
    :center="center"
    :zoom="6"
    map-type-id="roadmap"
    @bounds_changed="$emit('update_bounds', $event)"
  >
    <slot></slot>
    <GoogleMarker
      v-for="station in stations"
      :key="station.id"
      :position="station.geopos"
      :clickable="true"
      @click="$emit('marker_clicked', station)"
    />
  </GoogleMap>
  
</template>