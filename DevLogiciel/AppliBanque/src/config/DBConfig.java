package config;


import java.sql.*;

public class DBConfig {


    public Connection getConnection() throws ClassNotFoundException, SQLException {
        //Class.forName("com.mysql.cj.jdbc.Driver");

        String connectionUrl = "Server=tcp:archidbserver.database.windows.net,1433;"
                + "Initial Catalog=AppliBank;"
                + "Persist Security Info=False"
                + "User ID=pierre;"
                + "Password={Dx.Hawk77};"
                + "MultipleActiveResultSets=False;"
                + "Encrypt=True;"
                + "TrustServerCertificate=False;"
                +   "Connection Timeout=30;";

        //DriverManager.getDriver("D:\\Cours\\Ynov\\mysql-connector-java-8.0.28");
        return DriverManager.getConnection(connectionUrl);
    }


    public void closeConnection(Connection con){
        if(con!=null){
            try {
                con.close();
            } catch (SQLException e) {
            }
        }
    }

    public void closePreparedStatement(PreparedStatement ps) {
        if(ps!=null){
            try {
                ps.close();
            } catch (SQLException e) {
            }
        }
    }

    public void closeResultSet(ResultSet rs) {
        if(rs!=null){
            try {
                rs.close();
            } catch (SQLException e) {
            }
        }
    }
}