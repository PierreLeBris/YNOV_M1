package Dao;

import Model.Transaction;

public class TransactionDao {

    public static void saveTransation(Transaction t){
        t.getAccountDebit().getListTransactions().add(t);
        t.getAccountCredit().getListTransactions().add(t);
    }
}