package main;

import java.util.HashMap;

import model.Data;
import model.Element;
import model.Player;
import utilitaires.Utilitaires;

public class Game {

    HashMap<Integer, String> randomMouvToString;

    public Game() {
        randomMouvToString  = new HashMap<Integer, String>();
        randomMouvToString.put(0, "z");
        randomMouvToString.put(1, "s");
        randomMouvToString.put(2, "q");
        randomMouvToString.put(3, "d");

    }

    public void game() {
        Data data = new Data();
        Utilitaires.fill2DArrayChar(data.getMap());
        Utilitaires.fillMapWithElement(data);
        Utilitaires.createAndPlaceEnemyOnMap(data);
        Utilitaires.createAndPlaceItemOnMap(data);

        boolean gameOn = true;
        while(gameOn) {
            Utilitaires.print2DArrayCharToConsole(data.getMap());
            System.out.println("Mouvement ?");
            String mouvPlayer = Utilitaires.saisieString();
            handleMouvableElementMouvement(data, mouvPlayer, data.getPlayer());
            Utilitaires.fillMapWithElement(data);
            handleEnemyMouvement(data);
            Utilitaires.fillMapWithEnemy(data);
        }
    }

    private void handleEnemyMouvement(Data data) {
        for (Element enemy : data.getEnemies()) {
            int i = Utilitaires.randomInt(4);
            String s = randomMouvToString.get(i);
            handleMouvableElementMouvement(data, s, enemy);
        }
    }

    public void handleMouvableElementMouvement(Data data, String mouvPlayer, Element mouvableElement) {
        Utilitaires.clearPositionElement(data, mouvableElement);
        Element p = mouvableElement;
        switch(mouvPlayer.toLowerCase()) {
            case "z" :
                if(data.getMap()[p.getX()-1][p.getY()] == ' ') {
                    p.setX(p.getX()-1);
                }
                break;
            case "s" :
                if(data.getMap()[p.getX()+1][p.getY()] == ' ') {
                    p.setX(p.getX()+1);
                }
                break;
            case "q" :
                if(data.getMap()[p.getX()][p.getY()-1] == ' ') {
                    p.setY(p.getY()-1);
                }
                break;
            case "d" :
                if(data.getMap()[p.getX()][p.getY()+1] == ' ') {
                    p.setY(p.getY()+1);
                }
                break;
            default : ;
                break;
        }

    }

}