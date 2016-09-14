export default function search(graph, root) {
  graph.nodes.forEach(node => {
    node.distance = Infinity;
  });

  root.distance = 0;
  const queue = [root];

  while (queue.length) {
    const current = queue.shift();

    current.adjacencies.forEach(node => {
      if (node.distance === Infinity) {
        node.distance = current.distance + 1;
        node.parent = current;
        queue.push(node);
      }
    });
  }
}
