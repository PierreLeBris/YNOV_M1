package config;


import java.sql.*;

public class DBConfig {


    public Connection getConnection() throws ClassNotFoundException, SQLException {

        String connectionUrl = "jdbc:sqlserver://archidbserver.database.windows.net:1433;database=AppliBank;user=pierre@archidbserver;password=Dx.Hawk77;encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30;";
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