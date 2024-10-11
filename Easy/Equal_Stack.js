

class EqualStacks {
  
  // The main function to find the maximum equal height of stacks
  equalStacks(h1, h2, h3) {
    let maxHeight = 0;

    let st1 = [];
    let st2 = [];
    let st3 = [];

    this.fillStacks(st1, h1, st2, h2, st3, h3);

    // Run a loop until every stack has at least 1 element
    while (st1.length > 0 && st2.length > 0 && st3.length > 0) {
      let stack1Height = st1[st1.length - 1];
      let stack2Height = st2[st2.length - 1];
      let stack3Height = st3[st3.length - 1];

      // If all stacks are of the same height, just return the height
      if (stack1Height === stack2Height && stack2Height === stack3Height) {
        maxHeight = st1[st1.length - 1];
        break;
      }

      // Else find the stack with the maximum height and remove the block
      if (stack1Height >= stack2Height && stack1Height >= stack3Height) {
        st1.pop();
      } else if (stack2Height >= stack1Height && stack2Height >= stack3Height) {
        st2.pop();
      } else if (stack3Height >= stack1Height && stack3Height >= stack2Height) {
        st3.pop();
      }
    }

    return maxHeight;
  }

  // Helper function to fill stacks with the cumulative height
  fillStacks(st1, h1, st2, h2, st3, h3) {
    let st1TotalHeight = 0, st2TotalHeight = 0, st3TotalHeight = 0;

    // Push consolidated height into the stack instead of individual cylinder height
    for (let i = h1.length - 1; i >= 0; i--) {
      st1TotalHeight += h1[i];
      st1.push(st1TotalHeight);
    }
    for (let i = h2.length - 1; i >= 0; i--) {
      st2TotalHeight += h2[i];
      st2.push(st2TotalHeight);
    }
    for (let i = h3.length - 1; i >= 0; i--) {
      st3TotalHeight += h3[i];
      st3.push(st3TotalHeight);
    }
  }
}

