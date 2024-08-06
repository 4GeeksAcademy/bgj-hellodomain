//to run this file type in "node app.js" in this terminal 
let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".us", ".io"];

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let ext = 0; ext < extensions.length; ext++) {
          let domain = `${pronoun[p]}${adj[a]}${noun[n]}${extensions[ext]}`;
          console.log(domain);
        }
      }
    }
  }
