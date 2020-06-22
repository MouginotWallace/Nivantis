import {firebasedb} from "boot/firebase";

export default {
  getAllProduits({commit}) {
    firebasedb.database().ref('produits').once('value')
      .then((data) => {
        const produit= []
        const obj = data.val()
        let i=0
        for (i in obj) {
          for (let j=0;j <obj[i].length;j++) {
            produit.push({
              nom: obj[i][j].nom,
              prix: obj[i][j].prix,
            })
          }
        }
        console.log(produit)
        commit('setProduits',produit)
      }).catch((error)=>{
        console.log(error)
    })
  },
  setProduits({commit}, payload) {
    let produits= [
      {
        nom: 'Archovist',
        prix: 12
      },
      {
        nom: 'Bendroklax',
        prix: 7
      },
      {
        nom: 'Colomyst',
        prix: 4
      },
      {
        nom: 'Drestalo',
        prix: 56
      },
      {
        nom: 'Eflosyl',
        prix: 32.7
      },
      {
        nom: 'Efrisilanyme',
        prix: 47.5
      },
      {
        nom: 'Forotex',
        prix: 21.12
      },
      {
        nom: 'Gulpidab',
        prix: 6
      },
      {
        nom: 'Hilpotex',
        prix: 10
      },
      {
        nom: 'Igromas',
        prix: 14
      },
      {
        nom: 'Julexo',
        prix: 9
      },
      {
        nom: 'Kloronik',
        prix: 21
      },
      {
        nom: 'Lustivar',
        prix: 18
      },
      {
        nom: 'Misosup',
        prix: 13
      },
      {
        nom: 'Nemboya',
        prix: 3
      },
      {
        nom: 'Operasi',
        prix: 7
      },
      {
        nom: 'Questi',
        prix: 6
      },
      {
        nom: 'Ruflon',
        prix: 25
      },
      {
        nom: 'Suplex',
        prix: 14
      },
      {
        nom: 'Tundrax',
        prix: 12.5
      },
      {
        nom: 'Uvilox',
        prix: 10.6
      },
      {
        nom: 'Visiomeats',
        prix: 31.9
      },
      {
        nom: 'Wokitum',
        prix: 18.9
      },
      {
        nom: 'Xuliphon',
        prix: 9.99
      },
      {
        nom: 'Yanderechan',
        prix: 8
      },
      {
        nom: 'Zumblast',
        prix: 6.99
      }
    ]
    firebasedb.database().ref('produits').push(produits).then((data) =>{
      console.log("ok")
      //commit('setProduits',data)
    }).catch((error)=> {
      console.log(error)
    })
  }
}
