import { wait } from "@testing-library/user-event/dist/utils/index.js";
import React from "react";
import { bubbleSortAnimations, mergeSortAnimations } from '../sortingAlgs/sortingAlgs.js';
import { quickSortAnimations } from '../sortingAlgs/sortingAlgs.js';
import { heapSortAnimations } from '../sortingAlgs/sortingAlgs.js';
import './VisualSort.css';

let screenWidth = window.screen.availWidth;
let screenHeight = window.screen.availHeight;

const ANIMATION_SPEED_MS = 1;

const NUMBER_OF_ARRAY_BARS = Math.floor(screenWidth / 5);

const PRIMARY_COLOR = 'white';

const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randInt(10, Math.floor(screenHeight / 1.2)));
    }
    this.setState({ array });
  }

  mergeSort() {
    const animations = mergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-spike');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIndex, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  heapSort() {
    const animations = heapSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-spike');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIndex, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {
    const animations = quickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-spike');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIndex, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  bubbleSort() {
    const animations = bubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-spike');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIndex, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  render() {
    const { array } = this.state;
    return (
      <div className="array-box">
        <h2>
            For more information regarding sorting algorithms and Big-O complexity, visit this <a
             href="https://en.wikipedia.org/wiki/Sorting_algorithm#Comparison_sorts" target="_blank">Wikipedia</a> article.
          </h2>
        {array.map((value, index) => (
          <div
            className="array-spike"
            key={index}
            style={{ height: `${value}px` }}>
          </div>
        ))}
        <div>
          <button class="btn" onClick={() => this.resetArray()}>New Array</button>
          <button class="btn" onClick={() => this.mergeSort()}>Merge Sort</button>
          <button class="btn" onClick={() => this.quickSort()}>Quick Sort</button>
          <button class="btn" onClick={() => this.bubbleSort()}>Bubble Sort</button>
          <button class="btn" onClick={() => this.heapSort()}>Heap Sort</button>
          <h1>
            Use the buttons above to either regenerate or sort the random array.
          </h1>
          
        </div>
      </div>
    )
  }
}

function randInt(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
}