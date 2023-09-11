const {createObj, addkid, writehtml} = require('./htmlconfig')

function formAndPrintTree(destpath) {
    let n0 = createObj(0);
    let n1 = createObj(1);
    let n2 = createObj(2);
    let n3 = createObj(3);
    let n4 = createObj(4);
    let n5 = createObj(5);
    let n6 = createObj(6);
    let n7 = createObj(7);
    let n8 = createObj(8);
    let n9 = createObj(9);
    addkid(n0,n1);
    addkid(n0,n2);
    addkid(n0,n3);
    addkid(n1,n4);
    addkid(n1,n5);
    addkid(n3,n6);
    addkid(n3,n8);
    addkid(n6,n7);
    addkid(n6,n9);

    writehtml(destpath, n0);
}

formAndPrintTree(process.argv[2]);