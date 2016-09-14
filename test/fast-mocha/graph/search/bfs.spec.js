import { Graph, GraphNode } from 'graph/objects';
import search from 'graph/search/bfs';

describe('graphs - BFS', () => {
  it('graph with 1 vertex is distance 0', () => {
    const graph = new Graph();
    const nodeA = new GraphNode();
    graph.add(nodeA);

    search(graph, nodeA);
    expect(nodeA.distance).to.eq(0);
  });

  it('graph with 2 unlinked nodes are 0 and Inf distance', () => {
    const graph = new Graph();
    const nodeA = new GraphNode();
    const nodeB = new GraphNode();
    graph.add(nodeA);
    graph.add(nodeB);

    search(graph, nodeA);
    expect(nodeA.distance).to.eq(0);
    expect(nodeB.distance).to.eq(Infinity);
  });

  it('graph with 2 linked nodes, non-root has distance 1 and parent', () => {
    const graph = new Graph();
    const nodeA = new GraphNode();
    const nodeB = new GraphNode();
    graph.add(nodeA);
    graph.add(nodeB);
    graph.biLink(nodeA, nodeB);

    search(graph, nodeA);
    expect(nodeA.distance).to.eq(0);
    expect(nodeB.distance).to.eq(1);
    expect(nodeB.parent).to.eq(nodeA);
  });

  it('graph with 3 singly-linked nodes', () => {
    const graph = new Graph();
    const nodeA = new GraphNode();
    const nodeB = new GraphNode();
    const nodeC = new GraphNode();
    graph.add(nodeA);
    graph.add(nodeB);
    graph.add(nodeC);
    graph.biLink(nodeA, nodeB);
    graph.biLink(nodeB, nodeC);

    search(graph, nodeA);
    expect(nodeA.distance).to.eq(0);
    expect(nodeB.distance).to.eq(1);
    expect(nodeC.distance).to.eq(2);
    expect(nodeC.parent).to.eq(nodeB);
    expect(nodeB.parent).to.eq(nodeA);
  });
});
