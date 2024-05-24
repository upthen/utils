import * as lodash from "./src/lodash.js";
import dayjs from "dayjs";

export { lodash, dayjs };

console.log("empty?");
const { isEmpty } = lodash;
if (isEmpty(null)) {
  console.log("empty");
}
