import merge from "lodash/merge";
import path from "path";

const index = {
  all: {
    env: process.env.NODE_ENV || "development",
    root: path.join(__dirname, ".."),
    port: process.env.PORT || 50001,
    ip: process.env.IP || "0.0.0.0",
    apiRoot: process.env.API_ROOT || ""
  }
};

module.exports = merge(index.all, index[index.all.env]);
export default module.exports;
