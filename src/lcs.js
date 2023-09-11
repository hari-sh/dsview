const {createObj, addkid, writehtml} = require('./htmlconfig')

function max(a , b)
{
	return (a > b)? a : b;
}

function lcs( X, Y , m , n, parent)
{
    var node = createObj(s1.substring(0,m) +', '+ s2.substring(0,n));
    addkid(parent, node);
    let retval = 0;
	if (m == 0 || n == 0)
		retval = 0;
	else if (X[m-1] == Y[n-1])
		retval = 1 + lcs(X, Y, m-1, n-1, node);
	else
		retval = max(lcs(X, Y, m, n-1, node), lcs(X, Y, m-1, n, node));
    node.content = node.content +' (' + retval +')';
    return retval;
}

var s1 = "AGGT";
var s2 = "GXTXA";
var root = createObj(s1 +', '+ s2);
lcs( s1, s2, s1.length, s2.length, root );
writehtml(process.argv[2], root)