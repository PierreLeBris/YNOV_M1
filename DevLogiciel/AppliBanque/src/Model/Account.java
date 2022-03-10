package Model;

import java.util.List;

public class Account {

    private String name;
    private Double balance;
    private boolean active;

    private List<Transaction> listTransactions;


    public Account(String name, Double balance, boolean active, List<Transaction> listTransactions) {
        this.name = name;
        this.balance = balance;
        this.active = active;
        this.listTransactions = listTransactions;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public List<Transaction> getListTransactions() {
        return listTransactions;
    }

    public void setListTransactions(List<Transaction> listTransactions) {
        this.listTransactions = listTransactions;
    }
}