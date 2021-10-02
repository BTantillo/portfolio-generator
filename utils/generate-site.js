const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the promise and send error to .catch
            if (err) {
                reject(err);
                return;
            }
            // if everything went well, relsove promise and send data to .then
            resolve ({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve ({
               ok: true,
               message: 'Stylesheet created!' 
            })
        })
    })
}

module.exports = { writeFile, copyFile}
