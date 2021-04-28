package com.example.springtemplate.daos;

import com.example.springtemplate.models.Player;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class PlayerJdbcDao {
    static final String DRIVER = "com.mysql.cj.jdbc.Driver";
    static final String HOST = "localhost:3306";
    static final String SCHEMA = "sportsDB";
    static final String CONFIG = "serverTimezone=UTC";
    static final String URL =
            "jdbc:mysql://"+HOST+"/"+SCHEMA+"?"+CONFIG;
    static final String USERNAME = "cs3200";
    static final String PASSWORD = "Lke385gu!";
    
    static Connection connection = null;
    static PreparedStatement statement = null;
    String CREATE_PLAYER = "INSERT INTO players VALUES (null, ?, ?, ?, ?, ?,?, ?, ?, null, null)";
    String FIND_ALL_PLAYERS = "SELECT * FROM players";
    String FIND_PLAYER_BY_ID = "SELECT * FROM players WHERE id=?";
    String DELETE_PLAYER = "DELETE FROM users WHERE id=?";
    String UPDATE_PLAYER_PASSWORD = "UPDATE users SET password=? WHERE id=?";
    String UPDATE_PLAYER = "UPDATE users SET first_name=?, " +
            "last_name=?, username=?, password=?, WHERE id=?";
    
    private Connection getConnection() throws ClassNotFoundException, SQLException {
        Class.forName(DRIVER);
        return DriverManager.getConnection(URL, USERNAME, PASSWORD);
    }
    
    private void closeConnection(Connection connection) throws SQLException {
        connection.close();
    }
    
    public Player findPlayerById(Integer id) throws SQLException, ClassNotFoundException {
        Player player = null;
        connection = getConnection();
        statement = connection.prepareStatement(FIND_PLAYER_BY_ID);
        statement.setInt(1, id);
        ResultSet resultSet = statement.executeQuery();
        if(resultSet.next()) {
            player = new Player(
                    resultSet.getString("position"),
                    resultSet.getInt("yearsPlaying"),
                    resultSet.getString("username"),
                    resultSet.getString("password"),
                    resultSet.getString("first_name"),
                    resultSet.getString("last_name"),
                    resultSet.getString("email"),
                    resultSet.getDate("date"));
        }
        closeConnection(connection);
        return player;
    }
    
    public Integer deletePlayer(Integer playerId) throws SQLException, ClassNotFoundException {
        Integer rowsDeleted = 0;
        connection = getConnection();
        statement = connection.prepareStatement(DELETE_PLAYER);
        statement.setInt(1, playerId);
        rowsDeleted = statement.executeUpdate();
        closeConnection(connection);
        return rowsDeleted;
    }
    
    public Integer updatePlayer(Integer playerId, Player newPlayer) throws SQLException, ClassNotFoundException {
        Integer rowsUpdated = 0;
        connection = getConnection();
        statement = connection.prepareStatement(UPDATE_PLAYER);
        statement.setString(1, newPlayer.getFirstName());
        statement.setString(2, newPlayer.getLastName());
        statement.setString(3, newPlayer.getFirstName());
        statement.setString(4, newPlayer.getLastName());
        statement.setInt(5, playerId);
        rowsUpdated = statement.executeUpdate();
        closeConnection(connection);
        return rowsUpdated;
    }
    
    public List<Player> findAllPlayers() throws ClassNotFoundException, SQLException {
        List<Player> players = new ArrayList<Player>();
        connection = getConnection();
        statement = connection.prepareStatement(FIND_ALL_PLAYERS);
        ResultSet resultSet = statement.executeQuery();
        while (resultSet.next()) {
            Player player = new Player(
                    resultSet.getString("position"),
                    resultSet.getInt("yearsPlaying"),
                    resultSet.getString("first_name"),
                    resultSet.getString("last_name"),
                    resultSet.getString("username"),
                    resultSet.getString("password"),
                    resultSet.getString("email"),
                    resultSet.getDate("date"));
            players.add(player);
        }
        closeConnection(connection);
        return players;
    }
    public Integer createPlayer(Player player)
            throws ClassNotFoundException, SQLException {
        Integer rowsUpdated = 0;
        connection = getConnection();
        statement = connection.prepareStatement(CREATE_PLAYER);
        statement.setString(1, player.getPosition());
        statement.setInt(2, player.getYearsPlaying());
        statement.setString(3, player.getFirstName());
        statement.setString(4, player.getLastName());
        statement.setString(5, player.getUsername());
        statement.setString(6, player.getPassword());
        statement.setString(7, player.getEmail());
        statement.setDate(8, (Date) player.getDateOfBirth());

        rowsUpdated = statement.executeUpdate();
        closeConnection(connection);
        return rowsUpdated;
    }
    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        System.out.println("JDBC DAO");
        PlayerJdbcDao dao = new PlayerJdbcDao();

        Player tatum = new Player("SF", 10,
                           "jt0", "celtics",
                         "jayson", "tatum", "jt0@gmail.com", new Date(1997-12-12));

        dao.createPlayer(tatum);
        List<Player> players = dao.findAllPlayers();

//        User adam = new User("Adam", "Smith", "adams", "invisiblehand", "http://bbc.in/30gXhI4");
//        User catherine = new User("Catherine", "Wood", "cathie", "bitcoinisbig", "https://ark-invest.com/");
//        dao.createUser(adam);
//        dao.createUser(thomas);
//        dao.createUser(catherine);
//        List<User> users = dao.findAllUsers();
//        for(User user: users) {
//            System.out.println(user.getUsername());
//        }
//        User user = dao.findUserById(5);
//        System.out.println(user.getUsername());
//        dao.deleteUser(5);
//        List<User> users = dao.findAllUsers();
//        for(User user: users) {
//            System.out.println(user.getUsername());
//        }
  //      Player thomas = new Player("SF", 10,
    //            "jt0", "celtics",
      //          "jayson", "tatum", "jt0@gmail.com", new Date(1997-12-12));
        //Player newTom = new Player(
          //      "SF", 10,
            //    "jt0", "celtics",
              //  "jay", "tatum", "jt0@gmail.com", new Date(1997-12-12));
       // dao.updatePlayer(6, newTom);
       // Player tom = dao.findPlayerById(6);
        //System.out.println(tom.getUsername());
    }
}
