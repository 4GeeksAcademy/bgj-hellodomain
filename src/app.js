/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".us", ".io"];

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a <= adj.length; a++) {
      for (let n = 0; n <= noun.length; n++) {
        for (let ext = 0; ext <= extensions.length; ext++) {
          let domain = `${p}${a}${n}${ext}`;
          console.log(domain);
        }
      }
    }
  }
};
