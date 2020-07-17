<template>
  <q-page padding>
    <GmapMap
      :center="center"
      :zoom="16"
      map-type-id="terrain"
      class="google-map"
    >
        <GmapMarker
          :key="index"
          v-for="(m, index) in myMarkers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
        />
      </GmapMap>

  </q-page>

</template>


<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCr9lkBtCLaJGZIs8Syqv7Zbjw7OK86nGs'

  },
})



export default {
  name: 'Map',
  
  data () {
    return {
      center: { lat: 45.508, lng: 4.7 },
      myMarkers: [],
      places: [],
      currentPlace: null
    }
  },
  

  methods:{

    setPlace(place) {
      this.currentPlace = place;
    },

    localisation: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        const marker = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
        }

        this.myMarkers.push({ position: marker });

      });

      
    },
  

    
    
    

    

  },

  mounted() {
    this.localisation();
  },

}


</script>
<style>

.google-map{
  width: 100vw;
  height: 90vh;
}

.q-layout-padding{
  padding-left: 0;
}

.getlocation{ 
  position: absolute;
  bottom: 5%;
  left: 5%;

  
}

@media screen and (max-width: 800px){
.q-layout-padding{
  padding-left: 0;
  padding-top: 10%;
}

.google-map{
  width: 100vw;
  height: 85vh;
}
}


</style>
