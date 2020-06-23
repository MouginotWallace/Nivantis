<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input v-model="text" label="Quel est la rue dans laquelle se trouve votre officine ?" :dense="dense" readonly/>
        <q-input v-model="ville" label="Ville *" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
        <q-input v-model="rue" label="Rue *" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
        <q-input v-model="numero" type="number" label="Numero"/>

        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
        </div>
      </q-form>
    </div>
  </q-page>
</template>


<script>
export default {
  // name: 'PageName',

  data () {
    return {
      ville: '',
      rue:'',
      numero:''
    }
  },
  mounted () {

  },
  computed:{

	},
}
</script>
<style>

</style>
