console.log('Starting app');

setTimeout(()=>{
    console.log('Inside of callback');
}, 2000);

setTimeout(()=>{
    console.log('Callback zero time');
},0);

console.log('Finishing app');