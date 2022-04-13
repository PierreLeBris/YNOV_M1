package Class;

import Decorator.DecoratorVoiture;

public class ToitOuvrant extends DecoratorVoiture {

    public ToitOuvrant(Voiture v){
        voiture = v;
    }

    public String getMarque() {
        return voiture.getMarque() + " Toit Ouvrant";
    }

    public int getPrix() {
        return voiture.getPrix() + 2000;
    }

    public int getPoids() {
        return voiture.getPoids() + 15;
    }
}
