package Class;

public abstract class Voiture {
    String Marque;
    int prix;
    int poids;

    public String getMarque() {
        return Marque;
    }

    public void setMarque(String marque) {
        Marque = marque;
    }

    public int getPoids() {
        return poids;
    }

    public void setPoids(int poids) {
        this.poids = poids;
    }

    public int getPrix() {
        return prix;
    }

    public void setPrix(int prix) {
        this.prix = prix;
    }

    public String toString(){
        return "Voiture : " + getMarque() + " , Prix : " + getPrix() + " , Poids : " + getPoids();
    }
}
