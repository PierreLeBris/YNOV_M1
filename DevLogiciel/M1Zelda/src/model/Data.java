package model;

import java.util.ArrayList;
import java.util.List;

public class Data {

    final static int MAPLENGTH= 20;
    final static int MAPWIDTH = 15;
    public final static int NBENEMIS = 10;
    public final static int NBITEMS = 5;

    char[][] map;
    Element player = new Player(5,5,"Link", 'L');
    List<Enemy> enemies = new ArrayList<Enemy>();
    List<Item> items = new ArrayList<Item>();



    public Element getPlayer() {
        return player;
    }

    public void setPlayer(Element player) {
        this.player = player;
    }

    public Data() {
        map = new char[MAPLENGTH][MAPWIDTH];
    }

    public char[][] getMap() {
        return map;
    }

    public void setMap(char[][] map) {
        this.map = map;
    }

    public List<Enemy> getEnemies() {
        return enemies;
    }

    public void setEnemies(List<Enemy> enemies) {
        this.enemies = enemies;
    }

    public static int getMapLength(){
        return MAPLENGTH;
    }

    public static int getMapWidth(){
        return MAPWIDTH;
    }

    public static int getNbenemis() {
        return NBENEMIS;
    }

    public static int getNbitems() {
        return NBITEMS;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }
}