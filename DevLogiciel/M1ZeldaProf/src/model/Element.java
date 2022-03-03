package model;

import java.util.ArrayList;

public abstract class Element {

	private int x, y;
	private String name;
	private char charForMap;
	private ArrayList<Item> inventory;

	public Element() {
		
	}
	public Element(int x, int y, String name, char charForMap) {
		this.x = x;
		this.y = y;
		this.setName(name);
		this.setCharForMap(charForMap);
		inventory = new ArrayList<Item>();
	}

	public int getX() {
		return x;
	}

	public void setX(int x) {
		this.x = x;
	}

	public int getY() {
		return y;
	}

	public void setY(int y) {
		this.y = y;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public char getCharForMap() {
		return charForMap;
	}

	public void setCharForMap(char charForMap) {
		this.charForMap = charForMap;
	}
	
	public ArrayList<Item> getInventory() {
		return inventory;
	}

	public void setInventory(ArrayList<Item> inventory) {
		this.inventory = inventory;
	}

	
}
