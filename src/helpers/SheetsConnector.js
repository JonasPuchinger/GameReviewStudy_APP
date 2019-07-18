class SheetsConnector {

    getNextCaptcha = (cb) => {
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://game-review-study-api.herokuapp.com/api/get-next-captcha", true);
        xhttp.addEventListener("load", function(event) {
            if (xhttp.status >= 200 && xhttp.status < 300) {
                let captchaType = parseInt(JSON.parse(xhttp.responseText)[0]);
                cb(captchaType);
            } else {
                console.warn(xhttp.statusText, xhttp.responseText);
            }
        });
        xhttp.send();
    }

    insertRow = (data) => {
        let xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://game-review-study-api.herokuapp.com/api/insert-row", true);
        xhttp.setRequestHeader("Accept", "application/json, text/plain, */*");
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(JSON.stringify(data));
    }

    insertReviewBackupRow = (data) => {
        let xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://game-review-study-api.herokuapp.com/api/insert-review-backup", true);
        xhttp.setRequestHeader("Accept", "application/json, text/plain, */*");
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(JSON.stringify(data));
    }
    
    insertQuestionsBackupRow = (data) => {
        let xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://game-review-study-api.herokuapp.com/api/insert-questions-backup", true);
        xhttp.setRequestHeader("Accept", "application/json, text/plain, */*");
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(JSON.stringify(data));
    }
    
    insertEmailRow = (data) => {
        let xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://game-review-study-api.herokuapp.com/api/insert-email", true);
        xhttp.setRequestHeader("Accept", "application/json, text/plain, */*");
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(JSON.stringify(data));
    }

}

export default SheetsConnector;