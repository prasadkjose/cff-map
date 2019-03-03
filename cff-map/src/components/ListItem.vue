
<script>
import ServicesIcons from './Icons.vue'
import BaseButton from './BaseButton.vue'

export default {
  props: {
    name: String,
    address: String,
    mail: String,
    services: Array
  },
  components: {
    ServicesIcons,
    BaseButton
  }
}
</script>

<template>
  <BaseButton
    v-on="$listeners"
    class="root"
  >
    <div class="content">
      <div class="title">{{name}}</div>
      <div class="subheading">{{address}}</div>
    </div>
    <div class="info">
      <a
        :href="'mailto:' + mail"
        class="mail"
      >{{mail}}</a>
      <services-icons :services="services" />
    </div>
  </BaseButton>
</template>

<style scoped>
.root {
  width: 100%;
  display: block;
  text-align: left;
  padding: 16px;
  color: #494949;

  /* border: solid 1px gray; */
  box-shadow: 2px 1px 3px 1px #b4b4b4;   

}
.root:hover {
  box-shadow: 0px 0px 5px 1px #EC0000;
}
.title{
  font-size: 0.95em;

}
.subheading {
  margin-bottom: 8px;
  font-size: 0.9em;

}

.info {
  display: flex;
  flex-flow: column;
  align-items: flex-end;
}

.mail {
  color: rgba(0, 0, 0, 0.54);
  align-self: flex-start;
  margin-bottom: 12px;
  font-size: 0.9em;

}

@media screen and (min-width: 600px) {
  .root {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .content {
    flex: 1;
  }

  .mail {
    align-self: flex-end;
  }
}
</style>
