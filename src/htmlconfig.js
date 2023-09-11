const fs = require('fs');

const docstart =`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Markmap</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hari-sh/flowjs/inc/treeview.css">
</head>

<body>
  <div class="container" id="inputcont">
      <form>
      <input id="diaginput" type="text" placeholder="Search...">
      <button id="diagbtn" type="button">Search</button>
      <div class="suggestions">
        <ul></ul>
      </div>
      </form>
  </div>

  <svg id="mindmap"></svg>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/d3-flextree@2.1.2/build/d3-flextree.min.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/hari-sh/flowjs/inc/treeview.js"></script>
  <script>
const ishashmap = false;
const datajson =`

const docend = `</script>
<script src="https://cdn.jsdelivr.net/gh/hari-sh/flowjs/inc/treeloader.js"></script>
</body>
</html>`

const createObj = (data) => {
    let obj = {
        "content": data,
        "children": []
    }
    return obj;
}

const addkid = (obj, kid) => {
    obj.children.push(kid);
}

const writehtml = (destpath, root) =>
{ 
    const jsonstr = JSON.stringify(root, (key, value) => {
        let typeofval = typeof(value);
        if (!(typeofval == "Array" || value.length == 0))
            return value;
    }, 2);

    fs.writeFileSync(destpath, docstart);
    fs.appendFileSync(destpath, jsonstr);
    fs.appendFileSync(destpath, docend);
}

module.exports = {createObj, addkid, writehtml}