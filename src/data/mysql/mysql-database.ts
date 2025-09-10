import mysql from "mysql";

interface Options {
  mysqlUrl: string;
  dbName: string;
}

export class MysqlDatabase {
  static async connect(options: Options) {
    const { mysqlUrl, dbName } = options;

    try {
      const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "123456",
        database: "tecnico",
      });

      connection.connect(function (err) {
        if (err) {
          console.error("Error connecting to MySQL: " + err.stack);
          return;
        }
        console.log("Connected to MySQL as id " + connection.threadId);
      });

      return true;
    } catch (error) {
      console.log("MySQL connection error");
      throw error;
    }
  }

  static disconnect() {
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "123456",
      database: "tecnico",
    });
    connection.end();
  }
}
