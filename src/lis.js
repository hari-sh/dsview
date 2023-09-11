
const {createObj, addkid, writehtml} = require('./htmlconfig')

function _lis(arr,n, parent)
{   
    let node = createObj(arr.slice(0,n));
    addkid(parent,node);
    if (n == 1)
    {
        node.content = node.content + ' (1)';
        return 1;
    }
    
    let res, max_ending_here = 1;
    for (let i = 1; i < n; i++)
    {
        res = _lis(arr, i, node);
        if (arr[i-1] < arr[n-1] && res + 1 > max_ending_here)
            max_ending_here = res + 1;
    }
    if (max_ref < max_ending_here)
        max_ref = max_ending_here;
    
    node.content = node.content + ' (' +max_ending_here+')';
    return max_ending_here;

}

function lis(arr,n, destpath)
{
    max_ref = 1;
    var root = createObj('lis');
    _lis( arr, n, root);
    writehtml(destpath, root);
    return max_ref;
}

let arr=[10, 22, 9 ]
lis(arr, arr.length, process.argv[2])

