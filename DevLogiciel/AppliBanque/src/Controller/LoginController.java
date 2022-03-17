package Controller;

import Dao.UserDao;
import Model.Data;
import Model.User;

public class LoginController {

    UserDao userDao = new UserDao();

    public static User checkLogin(String userName, String password) {
        return null;
    }

    public void login(String userId, String password){

        User userTemp = userDao.getUserById(Integer.parseInt(userId));


        if(userTemp!=null && userTemp.getPassword().equals(password)){
            Data.setConnectedUser(userTemp);
       }
    }
}
