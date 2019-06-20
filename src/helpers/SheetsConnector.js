class SheetsConnector {

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