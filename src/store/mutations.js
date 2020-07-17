export default {
  setProduits(state, payload){
    state.produit=payload
  },
  setClient (state, payload) {
    state.client= payload
  },
  setFormations (state,payload) {
    state.formations= payload
  },
  setVente (sate,payload) {
     state.vente= payload
  },
  setVisite (state, payload) {
     state.visite= payload
  },
  setAchat (state,payload) {
     state.achat= payload
  }
}
