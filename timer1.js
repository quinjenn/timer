var timer = process.argv.slice(2);
for (var i = 0; i < timer.length; i++) {
  if (Math.sign(timer[i]) === 1 && !isNaN(timer[i])) {
    // checking if time (the value inputted) is postive (using Math sign) and is if it's a number using !isNan)
    setTimeout(function () {
      process.stdout.write("B33P B33P B33P", timer[i]);
    }, timer[i] * 1000);
  }
  // return process.stdout.write("");
}

/* EDGE CASES
1. No numbers are provided: Easy. It should just not beep at all and end immediately 
since no beeps should get scheduled.
2. An input is a negative number: Ignore/skip any numbers that are negative. We can't 
schedule anything in the past.
3. An input is not a number: Ignore/skip these as well, instead of attempting to call 
setTimeout with a non-number. */
// if Math.sign()
