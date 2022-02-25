package principal;

import model.Data;
import utilitaires.Utilitaires;

public class Main {

	
	
	
	public static void main(String[] args) {
		Data d = new Data();
		
		Utilitaires.fillMap(d);
		Utilitaires.createPerso(d);
		Utilitaires.fillMapWithPerso(d);
		
		while(true) {
			Utilitaires.printMap(d);
			Utilitaires.mouvPerso(d);
			Utilitaires.printMap(d);
		}
	}

}
