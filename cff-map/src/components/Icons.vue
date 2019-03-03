
<script>
import { Services } from '../model/stations'

// Services icons mapping
const Icons = {
  [Services.LUGGAGE]: 'work',
  [Services.LOUNGE]: 'weekend',
  [Services.MONEY_EXCHANGE]: 'monetization_on'
}

export default {
  props: {
    services: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    icons() {
      return this.services.map(s => Icons[s]).filter(Boolean)
    }
  }
}
</script>

<template>
  <div class="icons">
    <i
      class="material-icons"
      v-for="icon in icons"
      :key="icon"
    >
      {{icon}}
    </i>
  </div>
</template>

<style scoped>
i {
  font-size: 32px;
  color: rgba(0, 0, 0, 0.54);
  margin-left: 4px;
}
</style>
