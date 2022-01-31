const Model = require("./Model");

class WidgetRepo extends Model {
  static get tableName() {
    return "tbl_widgets";
  }
}

module.exports = WidgetRepo;
