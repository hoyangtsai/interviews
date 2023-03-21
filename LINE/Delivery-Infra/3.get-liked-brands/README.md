# Get Liked Brands

You would like to make a list of N top brand names for a specific user based on his/her preferences. The method of compiling the list is as follows:

1. Every user has a list of brands he/she likes most. If there are at least N liked brands, take the first N brand names from the list.
2. There are lists of brands which are most popular among the users of each gender. If the user's list does not have enough liked brands, then the rest of the result list should be filled up with top brands from list for the user's gender.
3. If the user's individual preference list and the list for that user's gender combined do not provide enough brands, you should finish with an error.

Write a function: function solution (U, N); that, given user U and the number of brand names N. returns a Promise that should either be:

- resolved with an array of exactly N top brand names for the given user, in the following format: ["Some Brand Name", "Other Brand Name", "..."]; or
- rejected with a CustomError with the message "Not enough data" (if there are fewer than N brand names to be listed, or both Promises getLikedBrands (id) and getTopBrandsForGender (gender) are rejected).

**Technical details:**

Accessing data:

- The user parameter is an object of the following structure: { id: 123132, gender: "FEMALE"}, where id is an integer and gender is a string containing either "FEMALE" Or "MALE"
- The brand names liked by a specific user can be accessed by calling the function
  getLikedBrands(id).
- The list of brands for a gender can be obtained by calling the function
  getTopBrandsForGender (gender) .
- The functions return Promises, that will be rejected or resolved with data in the following format:

    ```json
    [
        { id: 123, name: "Some Brand Name" },
        { id: 456, name: "Other Brand Name" },
        ...
    ]
    ```

The result:

- The order of the brand names in the result list should be the same as the order in the lists produced by the functions, with brand names returned by getLikedBrands(id) listed first.
- Brand names returned bv both functions getLikedBrands(id) and getTopBrandsForGender(gender) in combination, should appear in the result list only once

**Examples:**

Given user U, assume that `getLikedBrands(U.id)` returns `[{id: 1, name: "Logestyx"), (id: 10, name: "Gladlear"}]` and `getTopBrandsForGender(U.gender)` returns `[{id: 6, name: "Burylaze Slapgalt"}, {id: 1, name: "Logestyx"}, {id: 7, name: "Izarpure"}]`.

1. For N=1, your function should return a Promise which resolves with an array `["Logestyx"]`.
2. For N=3, promise should be resolved with an array `["Logestyx", "Gladlear", "Burylaze", "Slapgalt"]`.
3. For N=4 Promise should be resolved with an array `["Logestyx","Gladlear", "Burylaze", "slapgalt" "Izarpure"]`.
4. For N=5 Promise should be rejected with a CustomError.

**Solution:**

```js
// solution.js

function solution(U, N) {
  return new Promise((resolve, reject) => {
    // Uniq function
    const uniq = list => Array.from(new Set(list))

    getLikedBrands(U.id).then(likedBrands => {
      // If liked brands are enough
      if (likedBrands.length >= N) {
        resolve(likedBrands.slice(0, N).map(i => i.name))
      } else { // else get more brands
        getTopBrandsForGender(U.gender).then(topBrands => {
          // Concat and unify brands list
          const allBrands = uniq(
            [...likedBrands, ...topBrands]
              .map(i => i.name)
          )

          allBrands.length >= N
            // If all brands are enough
            ? resolve(allBrands.slice(0, N))
            // If still not enough
            : reject(new CustomError('Not enough data'))
        })
      }
    })
  })
}
```
