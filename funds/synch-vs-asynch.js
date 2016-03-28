/**
 * Code Execution Sequence (Synchronous vs Asynchronous)
 * In JavaScript not everything is executed in order
 * that they appear in the script. Some actions happen
 * synchronously (meaning one after the other) and some
 * asynchronously (different order)
 */


/**
 * 'Start' is printed to the console.
 */
console.log('Start'); // (a)
/*
 * 'not really' is printed to the console one second from now
 * (1000 millisecond from now)
 */
setTimeout(function () { console.log('not really.')}, 1000); // (b)
/**
 * 'end' is printed to the console.
 */
console.log('end'); // (c)


/**
 * By looking at the script above, it looks
 * like three commands are executed one after
 * the other. But that is not the case.
 * First, 'Start' is printed to the console,
 * then 'end' is printed to the console,
 * and at the end 'not really' is printed.
 * This is roughly how the timeline looks like:
 *
 * 0sec-----------x--------------x------1sec----------x--|
 *   |            |              |                    |
 *  print        print          print                print
 * 'start'    'not really'      'end'             'not really'
 *            1sec from now
 *            the task is
 *           scheduled here
 *
 *
 *
 *
 */
