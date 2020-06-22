import {firebasedb} from "boot/firebase";

export default {
  setProduits({commit}, payload) {
    let produits= {
      nom: "snnsn",
      prix: 2500
    }
    firebasedb.database().ref('produits').push(produits).then((data) =>{
      console.log("ok")
      commit('setProduits',data)
    }).catch((error)=> {
      console.log(error)
    })
  }
}
