const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  constructor() {
    // const st = [];
    // this.head = null;
    // this.length = 0;
  }

  push(element) {
    // let st = [];
    for ( let i = 0, len = st.length; i <= len; i++ ) {
      if ( st.len === 0 ) {
        st.head = element;
      } else {
        len++;
        st[len-1] = element;
      }
    }
    return st;
  }

  pop() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  peek() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  Stack
};
