package Decorator;

import Class.Voiture;

public abstract class DecoratorVoiture extends Voiture {
    protected Voiture voiture;

    public abstract String getMarque();
    public abstract int getPrix();
    public abstract int getPoids();
}
