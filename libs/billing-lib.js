export function calculateCost(storage) {
    //if a user wants to store 10 or fewer notes, we’ll charge them $4 per note. 
    //For 100 or fewer, we’ll charge $2 
    //and anything more than a 100 is $1 per note
    const rate = storage <= 10
      ? 4
      : storage <= 100
        ? 2
        : 1;
  
    return rate * storage * 100;
  }