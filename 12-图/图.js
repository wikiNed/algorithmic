//dijkstra 错误
let graph = [
  [0,2,4,0,0,0],
  [0,0,2,4,2,0],
  [0,0,0,0,3,0],
  [0,0,0,0,0,2],
  [0,0,0,3,0,2],
  [0,0,0,0,0,0],
];
const INF = Number.MAX_SAFE_INTEGER;
const minDis = (dist,visited)=>{
    let min = INF;
    let minIndex = -1;
    for (let v= 0, length = dist.length; v < length; v++) {
        // console.log(v+":"+dist[v]);
        if( visited[v] === false && dist[v] <= min ){
            min = dist[v];
            minIndex = v;
        }
    }
    return minIndex;
};
const dijkastra = (graph , src )=>{
    const dist = [];
    const visited =[];
    const length = graph.length;
    for (let i = 0; i < length; i++) {
        dist[i] = INF;
        visited[i] = false;
    }
    dist[src] = 0;
    for (let i = 0; i < length; i++) {
        const u = minDis(dist,visited);
        // console.log(u);
        visited[u] = true;
        for (let v= 0 ;v < length; v++) {
            console.log(graph[u][v]);
            if( !visited[v] &&　graph[u][v] !== 0 && dist[u] !== INF && dist[u]+graph[u][v] < dist[u] ){
               dist[v] = dist[u]+graph[u][v];
           }
        }
        return dist;
    }
};
// console.log(dijkastra(graph, 1));

//floyd-warshall
const fw = graph =>{
    // console.time(1);
    const dist = [];
    const {length} = graph;
    console.log(length);
    for (let i = 0; i < length; i++) {
        dist[i] = [];
        for (let j = 0; j < length; j++) {
            if( i === j ){
                dist[i][j] === 0;
            }else if( !isFinite(graph[i][j]) ){
                dist[i][j] === INF;
            }else{
                dist[i][j] = graph[i][j]
            }
        }
    }
    console.log(dist);
    for (let k = 0; k < length; k++) {
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if( dist[i][k] + dist[k][j] < dist [i][j] ){
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    // console.timeEnd(1);
    return dist
};
console.log(fw(graph));
console.log(1);











