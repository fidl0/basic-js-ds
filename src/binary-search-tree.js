  const { NotImplementedError } = require('../extensions/index.js');

  // const { Node } = require('../extensions/list-tree.js');

  /**
  * Implement simple binary search tree according to task description
  * using Node from extensions
  */

  const Node = class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  class BinarySearchTree {

    constructor() {
      this.treeRoot = null;
    }

    root() {

      if (this.treeRoot == null) {
        return this.treeRoot;
      } else {
        return this.treeRoot;
      }
    }

    add( data ) {
      this.treeRoot = addWithin( this.treeRoot, data );

      function addWithin( node, data ) {
        if ( !node ) return new Node(data);
        if ( node.data === data ) return node;
        if ( data < node.data ) {
          node.left = addWithin( node.left, data );
        } else {
          node.right = addWithin( node.right, data );
        }

        return node;
      }
    }


    has(data) {
      return hasWithin(this.treeRoot, data);

      function  hasWithin( node, data ) {
        if ( !node ) return false;
        if ( node.data === data ) return true;

        if ( data < node.data ) {
          return hasWithin( node.left, data);
        } else {
          return hasWithin( node.right, data);
        }
      }
    }

    find(data) {
      return findWithin( this.treeRoot, data );

      function findWithin( node, data ) {
        if ( !node ) return null;
        if ( node.data === data ) return node;

        if ( data < node.data ) {
          return findWithin( node.left, data );
        } else {
          return findWithin( node.right, data );
        }
      }
    }

    remove(data) {
      this.treeRoot = removeNode( this.treeRoot, data );

      function removeNode( node, data ) {
        if ( !node ) {
          return null;
        }

        if ( data < node.data ) {
          node.left = removeNode( node.left, data );
          return node;
        } else if ( node.data < data ) {
          node.right = removeNode( node.right, data );
          return node;
        } else {
          if ( !node.left && !node.right ) return null;

          if ( !node.left ) {
            node = node.right;
            return node;
          }

          if ( !node.right ) {
            node = node.left;
            return node;
          }

          let minRightNode = node.right;
          while ( minRightNode.left ) {
            minRightNode = minRightNode.left;
          }
          node.data = minRightNode.data;

          node.right = removeNode( node.right, minRightNode.data );
          return node;

        }
      }

    }

    min() {
      if (!this.treeRoot) return;

      let node = this.treeRoot;
      while ( node.left ) {
        node = node.left;
      }
      return node.data;
    }

    max() {
      if (!this.treeRoot) return;

      let node = this.treeRoot;
      while ( node.right ) {
        node = node.right;
      }
      return node.data;
    }
  }

  module.exports = {
    BinarySearchTree
  };