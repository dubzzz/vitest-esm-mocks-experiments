import path from "path"; // import {extname} from "path", does not work!

export function play() {
  return path.extname("toto.txt");
}
