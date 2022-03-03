package sample;

import model.*;
import utilitaires.Utilitaires;

import java.util.HashMap;

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
				else if(data.getMap()[p.getX()-1][p.getY()] == 'I' && (p instanceof Player)){
					p.getInventory().add(getPickupItem(data, p.getX()-1, p.getY()));
					p.setX(p.getX()-1);
				}
				else if(data.getMap()[p.getX()-1][p.getY()] == 'E' && (p instanceof Player)) {
					Element e = getEnemyFromCoordonate(data, p.getX()-1, p.getY());
					data.getEnemies().remove(e);
					p.setX(p.getX()-1);
				}
				else if(data.getMap()[p.getX()-1][p.getY()] == 'L' && (p instanceof Enemy)) {
					System.out.println("Game over");
				}
				break;
			case "s" :
				if(data.getMap()[p.getX()+1][p.getY()] == ' ') {
					p.setX(p.getX()+1);
				}
				else if(data.getMap()[p.getX()+1][p.getY()] == 'I' && (p instanceof Player)){
					p.getInventory().add(getPickupItem(data, p.getX()-1, p.getY()));
					p.setX(p.getX()+1);
				}
				else if(data.getMap()[p.getX()+1][p.getY()] == 'E' && (p instanceof Player)) {
					Element e = getEnemyFromCoordonate(data, p.getX()+1, p.getY());
					data.getEnemies().remove(e);
					p.setX(p.getX()+1);
				}
				else if(data.getMap()[p.getX()+1][p.getY()] == 'L' && (p instanceof Enemy)) {
					System.out.println("Game over");
				}
				break;
			case "q" :
				if(data.getMap()[p.getX()][p.getY()-1] == ' ') {
					p.setY(p.getY()-1);
				}
				else if(data.getMap()[p.getX()][p.getY()-1] == 'I' && (p instanceof Player)){
					p.getInventory().add(getPickupItem(data, p.getX()-1, p.getY()));
					p.setY(p.getY()-1);
				}
				else if(data.getMap()[p.getX()][p.getY()-1] == 'E' && (p instanceof Player)) {
					Element e = getEnemyFromCoordonate(data, p.getX(), p.getY()-1);
					data.getEnemies().remove(e);
					p.setY(p.getY()-1);
				}
				else if(data.getMap()[p.getX()][p.getY()-1] == 'L' && (p instanceof Enemy)) {
					System.out.println("Game over");
				}
				break;
			case "d" :
				if(data.getMap()[p.getX()][p.getY()+1] == ' ') {
					p.setY(p.getY()+1);
				}
				else if(data.getMap()[p.getX()][p.getY()+1] == 'I' && (p instanceof Player)){
					p.getInventory().add(getPickupItem(data, p.getX()-1, p.getY()));
					p.setY(p.getY()+1);
				}
				else if(data.getMap()[p.getX()][p.getY()+1] == 'E' && (p instanceof Player)) {
					Element e = getEnemyFromCoordonate(data, p.getX(), p.getY()+1);
					data.getEnemies().remove(e);
					p.setY(p.getY()+1);
				}
				else if(data.getMap()[p.getX()][p.getY()+1] == 'L' && (p instanceof Enemy)) {
					System.out.println("Game over");
				}
				break;
			default : ;
				break;
		}

	}


	private Element getEnemyFromCoordonate(Data data, int x, int y) {
		for (Enemy e : data.getEnemies()) {
			if(e.getX() == x && e.getY() == y) {
				return e;
			}
		}
		return null;
	}


	private Item getPickupItem(Data data, int x, int y) {
		for (Item i : data.getItems()) {
			if(i.getX() == x && i.getY() == y) {
				return i;
			}
		}
		return null;
	}
	
}
