package utilitaires;

import model.Data;
import model.Element;
import model.Enemy;
import model.Item;

import java.util.Random;
import java.util.Scanner;

public class Utilitaires {

	public static void print2DArrayCharToConsole(char[][] tad2D) {
		for (char[] cs : tad2D) {
			for (char cs2 : cs) {
				System.out.print(cs2 + "  ");
			}
			System.out.println("");
		}
	}
	
	public static char[][] fill2DArrayChar(char[][] tab2D) {
		for (int i = 0; i<tab2D.length; i++) {
			for (int j = 0; j<tab2D[i].length; j++) {
				if(i==0 || j==0 || i==tab2D.length-1 || j==tab2D[i].length-1) 
					tab2D[i][j]='0';
				else {
					tab2D[i][j]=' ';
				}
			}
		}
		return tab2D;
	}

	public static void fillMapWithElement(Data data) {
		data.getMap()[data.getPlayer().getX()][data.getPlayer().getY()] =
				data.getPlayer().getCharForMap();
	}
	
	public static String saisieString() {
		Scanner sc = new Scanner(System.in);
		return sc.nextLine();
	}

	public static void clearPositionElement(Data data, Element mouvableElement) {
		data.getMap()[mouvableElement.getX()][mouvableElement.getY()] = ' ';
	}

	public static void createAndPlaceEnemyOnMap(Data data) {
		for(int i = 1; i<=Data.NBENEMIS; i++) {
			int[] positionToCreation = positionRandomOnMap();
			data.getEnemies().add(new Enemy(positionToCreation[0]+1, positionToCreation[1]+1, "Enemy", 'E'));
		}
		fillMapWithEnemy(data);
	}
	
	public static void fillMapWithEnemy(Data data) {
		for (Enemy e : data.getEnemies()) {
			data.getMap()[e.getX()][e.getY()] = e.getCharForMap();
		}
	}
	
	public static void fillMapWithItem(Data data) {
		for (Item i : data.getItems()) {
			data.getMap()[i.getX()][i.getY()] = i.getCharForMap();
		}
	}
	public static int[] positionRandomOnMap() {
		int[] randomPostion = new int[2];
		randomPostion[0] = randomInt(Data.getMapLenght()-2);
		randomPostion[1] = randomInt(Data.getMapWidth()-2);
		return randomPostion;
	}
	
	public static int randomInt(int maxBound) {
		Random r = new Random();
		return r.nextInt(maxBound);
	}

	public static void createAndPlaceItemOnMap(Data data) {
		for(int i = 1; i<=Data.NBITEMS; i++) {
			int[] positionToCreation = positionRandomOnMap();
			data.getItems().add(new Item(positionToCreation[0]+1, positionToCreation[1]+1, "Item", 'I'));
		}
		fillMapWithItem(data);
	}
	
}
