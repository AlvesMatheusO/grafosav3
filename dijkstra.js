export function dijkstra(graph, start) {
  const distances = {};
  const visited = {};
  const previous = {};

  // Inicializa as distâncias
  for (let vertex in graph) {
    distances[vertex] = Infinity;
    previous[vertex] = null;
  }
  distances[start] = 0;

  while (true) {
    let closest = null;

    for (let vertex in distances) {
      if (!visited[vertex] && (closest === null || distances[vertex] < distances[closest])) {
        closest = vertex;
      }
    }

    if (closest === null) break;

    visited[closest] = true;

    for (let neighbor in graph[closest]) {
      const distance = distances[closest] + graph[closest][neighbor];
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = closest;
      }
    }
  }

  return { distances, previous };
}
