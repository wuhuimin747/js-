// 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：

// 每行的元素从左到右升序排列。
// 每列的元素从上到下升序排列。
// 示例:

// 现有矩阵 matrix 如下：

// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// 给定 target = 5，返回 true。

// 给定 target = 20，返回 false

//充分运用矩阵的特性（横向纵向都递增）， 我们可以从角落（左下或者右上）开始遍历，这样时间复杂度是O(m + n).

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    //0.空数组判断
    if(!matrix || matrix.length === 0) return false;
    //1.先定义列索引和行索引
    let colIndex = 0;
    let rowIndex = matrix.length - 1;

    //2.第一次缩减搜索范围--划掉不必要的行：将目标和左下角的元素比较，如果目标小于左下角元素，目标就不在该行，就应该划掉这一行，即行索引上移
    while(rowIndex > 0){
        if(target < matrix[rowIndex][colIndex]){
            rowIndex--;
        }else{
            break;
        }
    }

    //3.第二次缩减范围--划掉不必要的列
    while(colIndex < matrix[0].length){
        if(target === matrix[rowIndex][colIndex]){
            return true;
        }else if( target > matrix[rowIndex][colIndex]){
            colIndex++;
        }else if(rowIndex > 0){// 再次削减行
            rowIndex--;
        }else{
            return false;
        }
    }

    return false;
};

var arr = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ];
console.info(searchMatrix(arr, 100));