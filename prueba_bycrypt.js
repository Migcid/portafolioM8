const bcrypt = require('bcrypt');

const start = Date.now();

(async () => {
    const start = Date.now();

    // genSalt
    const salt = await bcrypt.genSalt(10)
    console.log('salt: ' + salt);
    console.log('salt cb end: ' + (Date.now() - start) + 'ms');

    // hash
    const crypted = await bcrypt.hash('test', salt) 
    console.log('crypted: ' + crypted);
    console.log('crypted cb end: ' + (Date.now() - start) + 'ms');
    console.log('rounds used from hash:', bcrypt.getRounds(crypted));

    // compare
    const res = await bcrypt.compare('test', crypted)
    console.log('compared true: ' + res);
    console.log('compared true cb end: ' + (Date.now() - start) + 'ms');

})();