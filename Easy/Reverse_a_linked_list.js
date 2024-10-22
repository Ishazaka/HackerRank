class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}


//Reverse a Linked List Without Extra Space
function reverseWithoutExtraSpace(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let prevNode = null;
  let currentNode = head;

  while (currentNode !== null) {
    let nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }

  return prevNode;
}


//Reverse a Linked List Using a Stack

function reverseWithStack(head) {
  const stack = [];
  
  // Push all values to the stack
  while (head !== null) {
    stack.push(head.value);
    head = head.next;
  }

  // Create a dummy node to build the reversed list
  let reversedList = new ListNode(null);
  let ptr = reversedList;

  // Pop values from the stack to create the reversed list
  while (stack.length > 0) {
    ptr.next = new ListNode(stack.pop());
    ptr = ptr.next;
  }

  return reversedList.next;
}




