function are_isomorphic(graph1, graph2) {
    if (Object.keys(graph1).length != Object.keys(graph2).length) {
        return false;
    }

    let edges1 = Object.values(graph1).reduce((sum, adj) => sum + adj.length, 0);
    let edges2 = Object.values(graph2).reduce((sum, adj) => sum + adj.length, 0);
    if (edges1 !== edges2) {
        return false;
    }

    let degrees1 = Object.values(graph1).map(neighbors => neighbors.length).sort((a, b) => a - b);
    let degrees2 = Object.values(graph2).map(neighbors => neighbors.length).sort((a, b) => a - b);
    for (let i = 0; i < degrees1.length; i++) {
        if (degrees1[i] !== degrees2[i]) return false;
    }

    let vertices1 = Object.keys(graph1);
    let vertices2 = Object.keys(graph2);
    let used = new Set();
    let matches = {};

    function removeLast(index) {
        if (index == vertices1.length) {
            for (let v1 in graph1) {
                let v2 = matches[v1];
                let matched1 = new Set(graph1[v1].map(n => matches[n]));
                let adj2 = new Set(graph2[v2]);
                
                if (matched1.size !== adj2.size) return false;
                for (let v of matched1) {
                    if (!adj2.has(v)) return false;
                }
            }
            return true;
        }

        let v1 = vertices1[index];
        for (let v2 of vertices2) {
            if (!used.has(v2) && graph1[v1].length == graph2[v2].length) {
                matches[v1] = v2;
                used.add(v2);

                if (removeLast(index + 1)) return true;

                delete matches[v1];
                used.delete(v2);
            }
        }
        return false;
    }

    return removeLast(0);
}
