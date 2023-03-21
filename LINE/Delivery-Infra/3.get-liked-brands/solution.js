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