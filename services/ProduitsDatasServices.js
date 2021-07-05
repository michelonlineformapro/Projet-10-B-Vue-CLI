import http from '../http-config';


class ProduitsDatasServices{

    //recuperer tous les produits
    recupererTousProduits(){
        return http.get('/produits')
    }

    //Recuperer les datails d'un produits

    recupererProduitParId(id){
        return http.get(`/produits/${id}`)
    }
}

export default new ProduitsDatasServices()