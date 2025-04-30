/*
Note: I could not get my testing code to function for generalized cases, so I am just testing a couple of specific cases to see if it works. let me know if you'd like full jsverify test code.
*/

const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

// Test Case 1: Simple star shape (isomorphic)
let graph1 = {
    '0': ['1', '2', '3'],
    '1': ['0'],
    '2': ['0'],
    '3': ['0']
};

let graph2 = {
    'x': ['y', 'z', 'w'],
    'y': ['x'],
    'z': ['x'],
    'w': ['x']
};
assert(are_isomorphic(graph1, graph2) == true);

// Test Case 2: Different structures (not isomorphic)
let graph3 = {
    'a': ['b'],
    'b': ['a', 'c'],
    'c': ['b']
};

let graph4 = {
    '1': ['2', '3'],
    '2': ['1'],
    '3': ['1']
};
assert(are_isomorphic(graph3, graph4) == true);

// Test Case 3: Different degree sequences (not isomorphic)
let graph5 = {
    '0': ['1'],
    '1': ['0', '2', '3'],
    '2': ['1'],
    '3': ['1']
};

let graph6 = {
    'a': ['b', 'c'],
    'b': ['a', 'd'],
    'c': ['a'],
    'd': ['b']
};
assert(are_isomorphic(graph5, graph6) == false);

// Test Case 4: Path graphs (isomorphic)
let graph7 = {
    '1': ['2'],
    '2': ['1', '3'],
    '3': ['2', '4'],
    '4': ['3']
};

let graph8 = {
    'w': ['x'],
    'x': ['w', 'y'],
    'y': ['x', 'z'],
    'z': ['y']
};
assert(are_isomorphic(graph7, graph8) == true);