package utilitaires;

import model.Data;
import model.Element;

public class Utilitaires {

    public static void print2DArrayCharToConsole(char[][] tad2D) {
        for (char[] cs : tad2D){
            for (char cs2 : cs){
                System.out.print(cs2 + " ");
            }
            System.out.println("");
        }
    }

    public static char[][] fill2DArrayChar(char[][] tad2D){
        for (int i = 0; i<tad2D.length; i++){
            for (int j = 0; j<tad2D[i].length; j++){
                tad2D[i][j] = '.';
                if (i==0 || j==0 || i==tad2D.length-1 || j==tad2D.length-1)
                    tad2D[i][j]='0';
                else
                    tad2D[i][j]='.';
            }
        }
        return tad2D;
    }

    public static void fillMapWithElement(Data data) {
        data.getMap()[data.getPlayer().getX()][data.getPlayer().getY()] =
                data.getPlayer().getCharForMap();
    }
}
