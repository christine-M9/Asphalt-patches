# Asphalt-patches Both Javascript and Python Solutions.
## Description

AsphaltPatches is a Python module designed to calculate the minimum number of patches required to repair potholes on a road represented by a string.

## Road Representation

A road is represented by a string S, where each character represents a segment. The segments are numbered from 0 to N-1.

'.' represents a good segment without any potholes.

'X' represents a segment containing a pothole.

For example, in the string ".X..X":

Segment 0: '.'
Segment 1: 'X'
Segment 2: '.'
Segment 3: '.'
Segment 4: 'X'
This means there are two potholes at positions 1 and 4.


## More Examples
Given S = ".X..X", solution returns 2. The road fixing machine could patch, for example, segments 0-2 and 2-4.

Given S = "X.XXXXX.X.", solution returns 3. The road fixing machine could patch, for example, segments 0-2, 3-5 and 6-8.

Given S = "XX.XXX..", solution returns 2. The road fixing machine could patch, for example, segments 0-2 and 3-5.

Given S = "XXXX", solution returns 2. The road fixing machine could patch, for example, segments 0-2 and 1-3.

Corner Test Case: '.X...XX', solution returns 2.

## Algorithm Efficiency

The algorithm has a time complexity of O(N) .

The function iterates through the entire string S once. For each character in the string, it performs a constant amount of work to check if it's a pothole and update the counter.

Within the loop, all operations (comparisons, increments, and index access) are constant time operations. They do not depend on the size of the 

input string and take the same amount of time regardless of the length of S and Since the function performs a fixed number of operations for each

character in the input string, the time complexity is linear, represented as O(N), where N is the length of S. This means that as the length of 

the input string increases, the time it takes to execute the function also increases linearly.

## License

MIT License

Copyright (c) 2023 Christine K Juma

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Author

The author of this project is ;

    Christine K Juma.


[Click Here for Github Link](https://github.com/christine-M9)