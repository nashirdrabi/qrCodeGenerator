import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
inquirer
    .prompt([
        {
            message: "Write a url to convert to qr image",
            name: "url"
        }
    ])
    .then((answers) => {
        var url = answers.url;
        var qr_img = qr.image(url, { type: 'png' });
        qr_img.pipe(fs.createWriteStream('new_qr.png'));
        fs.writeFile('newurl.txt', url, err => {
            if (err) {
                console.error(err);
            } else {
                // file written successfully
            }
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log(error);
        } else {
            console.log(error);
            // Something else went wrong
        }
    });