'use strict';

class Graph {
  constructor() {
    this.edges = {};
    this.nodes = [];
  }

  addNode(val) {
    this.nodes.push(val);
    this.edges[val] = [];
    return this.nodes;
  }

  addEdge(node1, node2, weight = 1) {
    this.edges[node1].push({ node: node2, weight: weight });
    this.edges[node2].push({ node: node1, weight: weight });
  }

  getNodes() {
    let graph = '';

    this.nodes.forEach(node => {
      graph += node + ' -> ' + this.edges[node].map(n => n.node).join(', ') + '\n';
    });
    
    console.log(graph);
    return graph;
  }

  getNeighbors(node) {
    return this.edges[node];
  }
  
  size() {
    // - Returns the total number of nodes in the graph

  }

}

module.exports = Graph;
