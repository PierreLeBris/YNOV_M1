package main;

import model.Data;
import utilitaires.Utilitaires;

public class Game {

    public void game(){
        Data data = new Data();
        data.setMap(Utilitaires.fill2DArrayChar(data.getMap()));
        Utilitaires.print2DArrayCharToConsole(data.getMap());

        }
}
