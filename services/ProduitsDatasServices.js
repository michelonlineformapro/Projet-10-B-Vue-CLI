//Import de fchier de configuration axios et des resuètes HTTP (GET, POST, PUT/PATCH et DELETE)
import http from '../http-config';

//Creation d'une classe réutilisable
class ProduitsDatasServices{

    //recuperer tous les produits
    recupererTousProduits(){
        return http.get('/produits')
    }

    //Recuperer les datails d'un produits

    recupererProduitParId(id){
        return http.get(`/produits/${id}`)
    }

    //Creer un produit
    ajouterProduit(data){
        return http.post('/produits', data)
    }

    //mettre a jour un produit
    mettreAHourProduit(id, data){
        return http.put(`/produits/${id}`, data)
    }

    //Supprimer un produit
    supprimerProduit(id){
        return http.delete(`/produits/${id}`)
    }

}

export default new ProduitsDatasServices()