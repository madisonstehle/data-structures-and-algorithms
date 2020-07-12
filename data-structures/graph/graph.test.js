'use strict';

const Graph = require('./graph.js');

describe('happy path', () => {
  it('Node can be successfully added to the graph', () => {
    let myGraph = new Graph();
    let response = myGraph.addNode(10);

    expect(response).toStrictEqual([10]);
  });

  it('An edge can be successfully added to the graph', () => {
    let myGraph = new Graph();
    myGraph.addNode(10);
    myGraph.addNode(4);
    myGraph.addEdge(10, 4);

    expect(myGraph.edges).toStrictEqual({ 10: [{node: 4, weight: 1 }], 4: [{ node: 10, weight: 1}] });
  });

  it('A collection of all nodes can be properly retrieved from the graph', () => {
    let myGraph = new Graph();
    myGraph.addNode(10);

    let response = myGraph.getNodes();

    expect(response).toBe('10 -> \n')
  });
});
