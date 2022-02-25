package model;

public class Data {

    char[][] map;
    Element player = new Player(5,5,"Link", 'L');


    public Element getPlayer() {
        return player;
    }

    public void setPlayer(Element player) {
        this.player = player;
    }

    public Data() {
        map = new char[20][20];
    }

    public char[][] getMap() {
        return map;
    }

    public void setMap(char[][] map) {
        this.map = map;
    }

}