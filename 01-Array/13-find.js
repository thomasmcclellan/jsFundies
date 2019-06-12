//* 5/03/2019

const array1 = [5, 12, 8, 130, 44]

const found = array1.find(element => element > 10)

console.log(found) // 12

/*
Syntax:
arr.find(callback[, thisArg])

callback: function to execute on each value in the array, taking three arguments:
    element: the current element being processed in the array
    index (optional): the index of the current element being processed
    array (optional): the array --find-- was called upon
thisArg (optional): object to use as --this-- when executing --callback--

Return value:
The value of the FIRST element in the array that satisfies the provided testing function; otherwise, --undefined-- is returned.
*/

/*
Description:
The --find-- method executes the --callback-- function once for each index of the array until it finds out where --callback-- returns a --true-- value.  if such an element is found, --find-- immediately returns the value of that element.  Otherwise, --find-- returns --undefined--.  --callback-- is invoked for every index of the array from 0 to --length - 1-- and is invoked for all indexes, not just those that have been assigned values.  This may mean that it's less efficient for sparse arrays than other methods that only visit indexes that have been assigned value.

--find-- does not mutate the array on which it is called.
*/

/*
Browser Compatibility:
*Full Support: All others
Compatibility Unknown: NA
!No Support: IE
*/

//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find