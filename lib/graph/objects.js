export class Graph {
  constructor() {
    this.nodes = [];
  }
  add(inNode) {
    this.nodes.push(inNode);
  }
  biLink(nodeA, nodeB) {
    this.nodes = this.nodes;
    nodeA.adjacentTo(nodeB);
    nodeB.adjacentTo(nodeA);
  }
}

export class GraphNode {
  constructor() {
    this.adjacencies = [];
  }
  adjacentTo(inNode) {
    this.adjacencies.push(inNode);
  }
}
