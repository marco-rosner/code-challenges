/*
 * Complete the 'jimOrders' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts 2D_INTEGER_ARRAY orders as parameter.
 */

function jimOrders(orders) {
    // Write your code here
    for(let i=0;i<orders.length;i++) {
        orders[i][1] = orders[i][0] + orders[i][1]
        orders[i][0] = i + 1
    }

    return orders.sort((a, b) => a[1] - b[1]).map(arr => arr[0])
}

console.log(jimOrders([[1,3],[2,3],[3,3]]))
console.log(jimOrders([[8,1],[4,2],[5,6],[3,1],[4,3]]))