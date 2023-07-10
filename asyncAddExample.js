async function addAndCheck(num1, num2) {
  return new Promise((resolve, reject) => {
    const sum = num1 + num2;
    if (sum === 5) {
      resolve(sum); // Resolve the promise with the sum if it's 5
    } else {
      reject(new Error("The sum is not equal to 5.")); // Reject the promise with an error
    }
  });
}

async function calculateSum(num1, num2) {
  try {
    const result = await addAndCheck(num1, num2); // Await the promise
    console.log("Sum is equal to 5:", result);
  } catch (error) {
    console.error("Sum is not equal to 5:", error.message);
  }
}

calculateSum(2, 4);
