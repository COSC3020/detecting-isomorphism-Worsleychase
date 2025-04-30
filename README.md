# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

# Solution

First we compare the sequence of the degrees, which I'm assuming takes O(n log(n)) based on previous tasks. Then, in the removeLast function, we go through n choices for each vertex, reducing by 1 every vertex. So, we end up with a series of n * (n-1) * (n-2) * ... This simplifies to n!. The comparison for each permutation takes O(m). This means are simplified worst case is

$$ \Theta(n! * m) $$

where n is the # of verticies and m is the # of edges.

# Disclaimer

I used [this](https://calcworkshop.com/trees-graphs/isomorphic-graph/) to help with understanding and coming up with the test cases.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
