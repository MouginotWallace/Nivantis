<template>
  <q-page padding>
    <!-- content -->
    <ul v-for="val in tab" :key="val.id">
      <li>{{val.nom}}</li>
      <li>{{val.prix}}</li>
      <hr>
    </ul>
  </q-page>
</template>

<script>
import produits from 'src/data/produits'
export default {
  // name: 'PageName',
  data () {
    return {
      tab: []
    }
  },
  mounted () {
    this.tab = produits.medicament
  }
}
</script>
