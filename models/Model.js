const DB = require("better-sqlite3-helper");

//Represents a database table
//Static methods - work on the table
//Instance methods - work on a row in the table
class Model {
  /**
   * @returns {string}
   */
  static get tableName() {
    throw new Error("Model must provide a tablename!");
  }

  /**
   * @param {BetterSqlite3Helper.DataObject} data
   * @param {string?} whiteList
   */
  static insert(data, whiteList) {
    let t = this.tableName;
    return DB().insert(t, data, whiteList);
  }

  static delete(whereClause) {
    if (whereClause == null) throw new Error("delete() should be called with a valid whereClause");
    return DB().delete(this.tableName, whereClause);
  }

  static findOne(whereClause = {}) {
    let keys = Object.keys(whereClause);
    let values = Object.values(whereClause);
    if (keys && keys.length > 0)
      return DB().queryFirstRow(
        `select * from ${this.tableName} where ${keys.map((k) => `${k} = ?`).join(" and ")}`,
        values
      );
    else return DB().queryFirstRow(`select * from ${this.tableName}`);
  }

  static find(whereClause = {}) {
    let keys = Object.keys(whereClause);
    let values = Object.values(whereClause);
    if (keys && keys.length > 0)
      return DB().query(
        `select * from ${this.tableName} where ${keys.map((k) => `${k} = ?`).join(" and ")}`,
        values
      );
    else return DB().query(`select * from ${this.tableName}`);
  }
}

module.exports = Model;
