<template>
  <q-page padding>
    <div class="q-pa-md">

      <div class="row">


          <div class="col-12 col-md-4">

              <div class="col col-md-12 search-bar">
                <q-input  rounded color="amber-8" filled type="text" v-model="searchQuery" label="Medicine Search">
                  <template v-slot:prepend>
                    <q-icon name="fas fa-search" />
                  </template>
                </q-input>
              </div>

              <div class="col col-md-12 med-block">
                  <div class="med-list-container">
                    <div v-for="med in filteredMedecin" :key="med.id">

                        <input type="radio" v-model="PAB" :value="med.prix"/>
                        <h6 class="med-nom">{{med.nom}}</h6>
                        <p class="med-prix">{{med.prix}}€/brut</p>
                      <hr/>
                    </div>
                  </div>
              </div>

              

          </div>

        <div class="col-6 col-md-4 calc-block ">

          <div class="calc-item">
            <q-item-label>
              Prix d'achat Brut
            </q-item-label>
             <q-field color="amber-8" filled stack-label>
              <template v-slot:control>
                <div class="self-center full-width no-outline" tabindex="0">{{(+PAB)}}€</div>
              </template>
            </q-field>
          </div>

          

          <div class="calc-item">
            <q-item-label>
              Prix d'achat net
            </q-item-label>
             <q-field color="amber-8" filled stack-label>
              <template v-slot:control>
                <div class="self-center full-width no-outline" tabindex="0">{{+PAN}}€</div>
              </template>
            </q-field>
          </div>

          <div class="calc-item">
            <q-item-label>
              Taux de remise
            </q-item-label>
             <q-field color="amber-8" filled stack-label>
              <template v-slot:control>
                <div class="self-center full-width no-outline" tabindex="0">{{(1-((+PAN)/(+PAB)))*100}}%</div>
              </template>
            </q-field>
          </div>


          

          <div class="calc-item">
            <q-item-label>
              Prix de vente net
            </q-item-label>
             <q-field class="total" color="amber-8" filled stack-label>
              <template v-slot:control>
                <div  class="self-center full-width no-outline" tabindex="0">{{PVN}}€</div>
              </template>
            </q-field>
          </div>
    
        </div>

        <div class="col-6 col-md-4 calc-block ">

            <div class="calc-item">
              <q-item-label>
                Remise
              </q-item-label>
              <q-input  type="number" v-model="R" color="amber-8" filled>€</q-input>
            </div>
            
            <div class="calc-item">
              <q-item-label>
                Marge
              </q-item-label>
              <q-input  type="number" v-model="M" color="amber-8" filled>€</q-input>
            </div>

          </div>

      </div>
    </div>
  </q-page>
  
</template>

<script>

import produits from 'src/data/produits'

export default {
  // name: 'PageName',

  data () {
    return {
      searchQuery:'',
      tab: [],
      TDR: 0,
      R:0,
      PAB: 0,
      option:0,
      M: 0,

    }
  },
  
  mounted () {
    this.tab = produits.medicament;
  },

  computed:{
		filteredMedecin: function() {
			let medecin = this.searchQuery;
				return this.tab.filter(function(medicament) {
					return medicament.nom.indexOf(medecin) > -1;
				});	
    },

   

    PAN: function(){
      return (+this.PAB)-(+this.R)
    },

    PVN: function(){
      return (+this.PAN)+(+this.M)
    },

    CM: function(){
      return (+this.PVN)/(+this.PAN)
    },
	},
  
}
</script>
<style>

  .search-bar{
    margin-bottom: 2vh;
  }

  .med-block{
    border-radius: 0 0 10px 10px;
    -webkit-box-shadow: 0px 10px 15px 3px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 10px 15px 3px rgba(0,0,0,0.2);
    box-shadow: 0px 10px 15px 3px rgba(201,201,201,0.5);

  }

  .med-list-container{
    padding: 3vh;
    margin: 2vh;
    overflow: auto;
    max-height: 70vh;
  }

  .med-list-container::-webkit-scrollbar-track{
    background-color: #F5F5F5;
  }

  .med-list-container::-webkit-scrollbar{
    width: 12px;
    background-color: #F5F5F5;
  }

  .med-list-container::-webkit-scrollbar-thumb{
    background-color: rgb(151, 151, 151);
  }

  .med-nom{
    font-size: 1em;
    font-weight: bold;
    margin: 0;
    color: goldenrod;
  }

  .calc-block{
    margin: auto;
  }

  .calc-block .calc-item{
    margin: 5vh 4vw;
  }

  .calc-block .calc-item > div{
    font-size: 1.5em;
    margin: 1vh 0;
  }

  .total{
    background-color: rgba(0,0,0);
  }

  .total div{
    color: white !important;
    font-weight: bold;
  }

  /*RADIO*/
  


</style>