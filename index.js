import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";

inquirer
  .prompt([
    {
        name: "URL",
        message: "What is the URL of your favourite website: ",
        type: 'input',
    },
  ])
  .then((answers) => {
    const givenURL = answers.URL;
    console.log(givenURL);
    var qr_svg = qr.image(givenURL);
    qr_svg.pipe(fs.createWriteStream('qr_img_url.png'));

    fs.writeFile("URL.txt", givenURL, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
