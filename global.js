// Global objects

/*
terminates the node process after 
3 seconds and clears the interval
*/
setTimeout(() => {
        console.log('in the time-out');
        clearInterval(period);
},3000);

/*
sets the process interval
*/
const period = setInterval(() => {
        console.log('in the interval');
}, 1000);

/*
directory and file name Paths
*/

console.log(__dirname);
console.log(__filename);