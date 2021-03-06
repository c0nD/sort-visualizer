// Sorting calls
export function mergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array; // Already sorted
    const dumpArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, dumpArray, animations);
    return animations;
  }

  export function quickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
  }

  export function heapSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    heapSortHelper(array, 0, array.length - 1, animations);
    return animations;
  }

  export function bubbleSortAnimations(array) {
    const animations = [];
    bubbleSortHelper(array, animations);
    return animations;
  }

  // Helper functions
  function mergeSortHelper(mainArray,left,right,dumpArray,animations) {
    if (left === right) return;
    const mid = Math.floor((left + right) / 2);
    mergeSortHelper(dumpArray, left, mid, mainArray, animations);
    mergeSortHelper(dumpArray, mid + 1, right, mainArray, animations);
    doMerge(mainArray, left, mid, right, dumpArray, animations);
  }

  function quickSortHelper(mainArray, left, right, animations) {
    if (left < right) {
      let pi = doQuicksortPartition(mainArray, left, right, animations);
      quickSortHelper(mainArray, left, pi - 1, animations);
      quickSortHelper(mainArray, pi + 1, right, animations);
    }
  }

  function heapSortHelper(mainArray, left, right, animations) {
    let length = mainArray.length;
    for (let i = length / 2 - 1; i >= 0; i--) {
      doHeap(mainArray, length, i, animations);
    }
    for (let i = length - 1; i >= 0; i--) {
      animations.push([i, 0]);
      animations.push([i, 0]);
      animations.push([i, mainArray[0]]);
      animations.push([0, i]);
      animations.push([0, i]);
      animations.push([0, mainArray[i]]);
      let temp = mainArray[i];
      mainArray[i] = mainArray[0];
      mainArray[0] = temp;
  
      doHeap(mainArray, i, 0, animations);
    }
  }
  
  function bubbleSortHelper(mainArray, animations) {
    let length = mainArray.length;
    for (let i = 0; i < length; i++) {
      let swapped = false;
  
      for (let j = 0; j < length - i - 1; j++) {
        if (mainArray[j] > mainArray[j + 1]) {
          animations.push([j, j + 1]);
          animations.push([j, j + 1]);
          animations.push([j, mainArray[j + 1]]);
          animations.push([j + 1, j]);
          animations.push([j + 1, j]);
          animations.push([j + 1, mainArray[j]]);
          let temp = mainArray[j];
          mainArray[j] = mainArray[j + 1];
          mainArray[j + 1] = temp;
          swapped = true;
        }
      }
  
      if (swapped === false) {
        break;
      }
    }
  }

  // Sorting algs
  function doQuicksortPartition(mainArray, left, right, animations) {
    let i = left - 1;
    let pivot = mainArray[right];
    for (let j = left; j < right; j++) {
      if (mainArray[j] < pivot) {
        i++;
        animations.push([i, j]);
        animations.push([i, j]);
        animations.push([i, mainArray[j]]);
        animations.push([j, i]);
        animations.push([j, i]);
        animations.push([j, mainArray[i]]);
        let temp = mainArray[i];
        mainArray[i] = mainArray[j];
        mainArray[j] = temp;
      }
    }
    i++;
    animations.push([i, right]);
    animations.push([i, right]);
    animations.push([i, mainArray[right]]);
    animations.push([right, i]);
    animations.push([right, i]);
    animations.push([right, mainArray[i]]);
    let temp = mainArray[i];
    mainArray[i] = mainArray[right];
    mainArray[right] = temp;
    return i;
  }

  function doMerge(mainArray,left,mid,right,dumpArray,animations) {
    let k = left;
    let i = left;
    let j = mid + 1;
    while (i <= mid && j <= right) {
      animations.push([i, j]);
      animations.push([i, j]);
      if (dumpArray[i] <= dumpArray[j]) {
        animations.push([k, dumpArray[i]]);
        mainArray[k++] = dumpArray[i++];
      } else {
        animations.push([k, dumpArray[j]]);
        mainArray[k++] = dumpArray[j++];
      }
    }
    while (i <= mid) {
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([k, dumpArray[i]]);
      mainArray[k++] = dumpArray[i++];
    }
    while (j <= right) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([k, dumpArray[j]]);
      mainArray[k++] = dumpArray[j++];
    }
  }

  function doHeap(mainArray, length, i, animations) {
    let largest = i; 
    let left = 2 * i + 1;
    let right = 2 * i + 2;
  
    if (left < length && mainArray[largest] < mainArray[left]) {
      largest = left;
    }
    if (right < length && mainArray[largest] < mainArray[right]) {
      largest = right;
    }
  
    if (largest !== i) {
      animations.push([i, largest]);
      animations.push([i, largest]);
      animations.push([i, mainArray[largest]]);
      animations.push([largest, i]);
      animations.push([largest, i]);
      animations.push([largest, mainArray[i]]);
      let temp = mainArray[i];
      mainArray[i] = mainArray[largest];
      mainArray[largest] = temp;
  
      doHeap(mainArray, length, largest, animations);
    }
  
  }
