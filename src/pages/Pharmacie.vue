<template>
  <q-page padding>
    <!-- content -->
    <div class="q-pa-md">
    <div class="row flex justify-center">
      <div>
        <h6>Adresse de la Pharmacie</h6>
      </div>
    </div>
      <div class="row flex justify-center q-mt-md">
      <div class="col-xs-12 col-md-5 col-sm-6">
        <q-input label="Nom de la pharmacie" v-model="nom"/>
      </div>
    </div>
    <div class="row flex justify-center q-mt-md">
      <div class="col-xs-12 col-md-5 col-sm-6">
        <q-input label="Adresse de la pharmacie" v-model="adresse"/>
      </div>
    </div>
    <div class="row flex justify-center q-mt-md">
      <div class="col-xs-12 col-md-5 col-sm-6">
        <q-input label="tel de la pharmacie" v-model="tel"/>
      </div>
    </div>
    <div class="row flex justify-center q-mt-md">
      <div class="col-xs-6 col-md-2 col-sm-2">
        <q-input label="latitude" v-model="position.latitude"/>
      </div>
      <div class="col-xs-5 col-md-2 col-sm-2 offset-xs-1">
        <q-input label="longitude" v-model="position.longitude"/>
      </div>
    </div>
      <div class="row q-mt-md flex justify-center">
        <div>
          <q-btn label="Enregistrer" color="primary" class="col-12" @click="enregistrer"/>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      nom: '',
      adresse: '',
      tel: '',
      position: [
        {latitude : '', longitude: ''}
      ]
    }
  },
  methods: {
    enregistrer () {
      const client = {
        nom: this.nom,
        adresse: this.adresse,
        tel: this.tel,
        position: [this.position.latitude, this.position.longitude]
      }
      this.$store.dispatch('creerClient', {client: client})
    }
  }
}
</script>
