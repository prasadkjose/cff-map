"use strict";

require("whatwg-fetch");

var _vue = _interopRequireDefault(require("vue"));

var VueGoogleMaps = _interopRequireWildcard(require("vue2-google-maps"));

require("normalize.css");

var _App = _interopRequireDefault(require("./App.vue"));

var _store = _interopRequireDefault(require("./store"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue.default.config.productionTip = false;

_vue.default.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAP_KEY
  },
  installComponents: false
});

_vue.default.component('GoogleMap', VueGoogleMaps.Map);

_vue.default.component('GoogleMarker', VueGoogleMaps.Marker);

_vue.default.component('GoogleInfoWindow', VueGoogleMaps.InfoWindow);

new _vue.default({
  store: _store.default,
  render: function render(h) {
    return h(_App.default);
  }
}).$mount('#app');
