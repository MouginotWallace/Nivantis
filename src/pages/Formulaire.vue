<template>
  <q-page padding>
    <div class="q-pa-md">
      <br/>
      <q-form @submit="onSubmit" class="q-gutter-md">
        <div class="row flex justify-center">
          <q-input class="col col-md-6" v-model="nomPharmacie" label="Entrez le nom de la pharmacie" lazy-rules :rules="[ val => val && val.length > 0 || 'Veuillez entrer votre réponse']" />
        </div>

        <div v-for="question in questions" :key="question">

          <div class="row flex justify-center">
            <p class="col col-md-6 bg-red-3" style="padding: 5px; font-size: 16px; border-radius: 8px"> {{ question.question }} </p>
          </div>


          <div class="row flex justify-center" v-if="question.reponses.length > 1" v-for="reponse in question.reponses" :key="question.reponses">
            <q-checkbox class="col col-md-6" v-model="reponse.checked" :label=reponse.reponse color="orange"/>
          </div>


          <div class="row flex justify-center" v-if="question.reponses.length <= 1 ">
            <q-input class="col col-md-6" v-model="question.reponses[0]" label="Entrez votre réponse" lazy-rules :rules="[ val => val && val.length > 0 || 'Veuillez entrer votre réponse']" />
          </div>
        </div>

        <div class="row flex justify-center">
          <q-btn label="Submit" class="col col-4 offset-8" type="submit" color="primary"/>
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
      nomPharmacie: '',
      questions: [
        { question: "Avez-vous déjà entendu parler de nos produits ?", reponses: [
            { reponse: "Oui", checked: false },
            { reponse: "Non", checked: false },
            { reponse: "Ne sait pas", checked: false },
          ] },
        { question: "Est-ce que vous proposez nos produits aux client spontanément ?", reponses: [
            { reponse: "Oui", checked: false },
            { reponse: "Non", checked: false },
            { reponse: "Ne sait pas", checked: false },
          ] },
        { question: "Est-ce que vous avez des retours de vos clients sur nos produits ?", reponses: [
            { reponse: "Oui", checked: false },
            { reponse: "Non", checked: false },
            { reponse: "Ne sait pas", checked: false },
          ] },
        { question: "Quel est notre part de marché par rapport aux autres marques concurrentes ?", reponses: [] },
      ],
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
