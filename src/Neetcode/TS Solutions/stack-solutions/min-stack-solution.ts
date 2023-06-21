/* 
155. Min Stack

https://leetcode.com/problems/min-stack/

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

 - MinStack() initializes the stack object.
 - void push(int val) pushes the element val onto the stack.
 - void pop() removes the element on the top of the stack.
 - int top() gets the top element of the stack.
 - int getMin() retrieves the minimum element in the stack.

You must implement a solution with O(1) time complexity for each function.

Example 1: 
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
*/

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

class MinStack {
  private stack: number[];
  private minStack: number[];

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  /** 
   * @param {number} val
   * @return {void}
   */
  push(val: number): void {
    this.stack.push(val);

    const isMinEmpty = this.minStack.length === 0;
    const hasNewMin = val <= this.minStack[this.minStack.length - 1];
    const canAddMin = isMinEmpty || hasNewMin;
    if (canAddMin) this.minStack.push(val);
  }

  /**
   * @return {void}
   */
  pop(): void {
    const top = this.stack.pop();
    const canPopMin = top === this.getMin();
    if (canPopMin) this.minStack.pop();
  }

  /**
   * @return {number | null}
   */
  top(): number | null {
    return this.stack.length ? this.stack[this.stack.length - 1] : null;
  }

  /**
   * @return {number | null}
   */
  getMin(): number | null {
    return this.minStack.length ? this.minStack[this.minStack.length - 1] : null; 
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */