const profileDataArgs = process.argv.slice(2, process.argv.length);

const FileSystem = require('fs');

const generatePage = require('./src/page-template');

const [name, github] = profileDataArgs;


FileSystem.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
});

// printProfileData (profileDataArgs);