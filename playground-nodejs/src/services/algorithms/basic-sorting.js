const testArray = [2, 8, 44, 63, 5, 6, 16, 25, 4, 0, 3, 1, 7, 9, 12];

const mergeSort = (array) => {
    if (array.length <= 1) return array;
    const array1 = [];
    const array2 = [];

    const mid = Math.floor(array.length / 2);
    array1.push(...mergeSort(array.slice(0, mid)));
    array2.push(...mergeSort(array.slice(mid)));

    const tempArray = [];

    for (; array1.length && array2.length; ) {
        if (array1[0] < array2[0]) tempArray.push(array1.shift());
        else tempArray.push(array2.shift());
    }

    return tempArray.concat(array1).concat(array2);
};

class BinaryNode {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

const fullResult = [];

const binarySortStart = (array) => {
    let binaryTreeRoot = new BinaryNode(array[0]);

    for (let counter = 1; counter < array.length; counter++) binarySort(array[counter], binaryTreeRoot);
    fullTraversal(binaryTreeRoot);
    return fullResult;
};

const fullTraversal = (binaryNode) => {
    if (binaryNode) {
        fullTraversal(binaryNode.left);
        fullResult.push(binaryNode.value);
        fullTraversal(binaryNode.right);
    }
};

const binarySort = (currentValue, node) => {
    if (node == null) return;
    if (currentValue < node.value) {
        if (!node.left) node.left = new BinaryNode(currentValue);
        else binarySort(currentValue, node.left);
    } else {
        if (!node.right) node.right = new BinaryNode(currentValue);
        else binarySort(currentValue, node.right);
    }
};

// console.log('mergeSort: ', mergeSort(testArray));
console.log('binarySort: ', binarySortStart(testArray));
