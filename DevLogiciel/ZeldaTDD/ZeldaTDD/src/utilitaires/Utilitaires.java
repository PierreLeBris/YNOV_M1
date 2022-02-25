package utilitaires;

import java.util.Random;
import java.util.Scanner;
import java.util.concurrent.ThreadLocalRandom;

import model.Data;
import model.Enemy;
import model.Perso;
import model.Player;

public class Utilitaires {

	public static void fillMap(Data d) {
		for (int i = 0; i < d.map.length; i++) {
			for (int j = 0; j < d.map[i].length; j++) {
				d.map[i][j] = ' ';
				d.map[0][j] = '0';
				d.map[d.map.length - 1][j] = '0';

			}
			d.map[i][0] = '0';
			d.map[i][d.map[i].length - 1] = '0';
		}
	}

	public static void printMap(Data d) {
		for (int i = 0; i < d.map.length; i++) {
			for (int j = 0; j < d.map[i].length; j++) {
				System.out.print(d.map[j][i] + " ");
			}
			System.out.println();
		}
	}

	public static void fillMapWithPerso(Data d) {
		for (Perso perso : d.alPerso) {
			d.map[perso.getX()][perso.getY()] = perso.getNom();
		}
	}

	public static void createPerso(Data d) {
		d.alPerso.add(new Player(randomXY(1, 9), randomXY(1, 9), 'p'));
		d.map[d.alPerso.get(0).getX()][d.alPerso.get(0).getY()] = 'p';
		for (int i = 0; i < 5; i++) {
			int x = 1, y = 1;
			do {
				x = randomXY(1, 9);
				y = randomXY(1, 9);
			} while (d.map[x][y] != ' ');
			d.alPerso.add(new Enemy(x, y, 'e'));
			d.map[x][y] = 'e';

		}

	}

	public static int randomXY(int x, int y) {
		// Random r = new Random();
		return ThreadLocalRandom.current().nextInt(x, y);
//		  r.nextLong(x, y);
		// return r.nextInt(y-x)+x;
	}

	public static String saisieString() {
		try {
			Scanner sc = new Scanner(System.in);
			return sc.next();
		} catch (Exception e) {
			return "erreur";
		}
	}

	public static boolean mouvPerso(Data d) {
		boolean isGameOn = true;
		int movX = 0;
		int movY = 0;
		for (Perso perso : d.alPerso) {
			if (perso.getNom() == 'p') {
				String saisieToProcess = saisieString();
				switch (saisieToProcess) {
				case "z":
					movX = 0;
					movY = -1;
					// d.map[perso.getX()][perso.getY()] = ' ';
					// perso.setY(perso.getY()-1);

					// d.map[perso.getX()][perso.getY()] = perso.getNom();
					break;
				case "s":
					movX = 0;
					movY = 1;

					// d.map[perso.getX()][perso.getY()] = ' ';
					// perso.setY(perso.getY()+1);
					// d.map[perso.getX()][perso.getY()] = perso.getNom();
					break;
				case "q":
					movX = -1;
					movY = 0;

					// d.map[perso.getX()][perso.getY()] = ' ';
					// perso.setX(perso.getX()-1);
					// d.map[perso.getX()][perso.getY()] = perso.getNom();
					break;
				case "d":
					movX = 1;
					movY = 0;
					// d.map[perso.getX()][perso.getY()] = ' ';
					// perso.setX(perso.getX()+1);
					// d.map[perso.getX()][perso.getY()] = perso.getNom();
					break;
				default:
					System.out.println("Mauvaise saisie");
				}
				if (isGameOn(perso, d, movX, movY)) {
					d.map[perso.getX()][perso.getY()] = ' ';

					perso.setX(perso.getX() + movX);
					perso.setY(perso.getY() + movY);

					d.map[perso.getX()][perso.getY()] = perso.getNom();
					return true;
					
				}else return false;

			} else if (perso.getNom() == 'e') {
				switch (randomXY(1, 5)) {
				case 1:
					if ((d.map[perso.getX()][perso.getY() - 1]) == ' ') {
						d.map[perso.getX()][perso.getY()] = ' ';
						perso.setY(perso.getY() - 1);
						d.map[perso.getX()][perso.getY()] = perso.getNom();
					}
					break;
				case 2:
					if ((d.map[perso.getX()][perso.getY() + 1]) == ' ') {
						d.map[perso.getX()][perso.getY()] = ' ';
						perso.setY(perso.getY() + 1);
						d.map[perso.getX()][perso.getY()] = perso.getNom();
					}
					break;
				case 3:
					if ((d.map[perso.getX() - 1][perso.getY()]) == ' ') {
						d.map[perso.getX()][perso.getY()] = ' ';
						perso.setX(perso.getX() - 1);
						d.map[perso.getX()][perso.getY()] = perso.getNom();
					}
					break;
				case 4:
					if ((d.map[perso.getX() + 1][perso.getY()]) == ' ') {
						d.map[perso.getX()][perso.getY()] = ' ';
						perso.setX(perso.getX() + 1);
						d.map[perso.getX()][perso.getY()] = perso.getNom();
					}
					break;
				default:
					System.out.println("ERREUR");
				}
			}
		}
		return isGameOn;
	}

	public static boolean isGameOn(Perso p, Data d, int x, int y) {
		return (d.map[p.getX() + x][p.getY() + y] == ' ');
	}

}
