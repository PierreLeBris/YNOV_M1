package Controller;

import Class.Voiture;
import Class.Citroen;
import Class.Mercedes;
import Class.ToitOuvrant;

public class Main {

    public static void main(String [] args){

        Voiture v1 = new Citroen();
        System.out.println(v1);

        Voiture v2 = new Mercedes();
        v2 = new ToitOuvrant(v2);
        System.out.println(v2);

    }
}
