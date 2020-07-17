<template>
  <q-page padding>
    <!-- content -->
    <div class="q-mt-md">
      <div class="row flex justify-center">
        <div>
          <h5>Formulaire d'ajout de question</h5>
        </div>
      </div>
      <div class="row flex justify-center">
        <div class="col-xs-12 col-sm-5 col-md-5">
          <q-input label="Question" v-model="question" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
