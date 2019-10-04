// -- Load model needed for the project
const CoursProcess = require('./coursProcess');
let auth = module.exports;

// -- CREATE
async function actionCreate (req, res) {
    console.log("Action : Cours - CREATE");

    try{
        CoursProcess.processCreate(req).then((callback) => {
            console.log("Process : Cours - CREATE : " + callback);

            res.send(callback);
        });
    } catch(err) {
        console.log("Process : Cours - CREATE : Error - " + err);

        res.send(err);
    }
};

exports.actionCreate = actionCreate;