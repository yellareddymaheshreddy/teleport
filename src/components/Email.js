const Email = {
    send: function (a) {
        return new Promise(function (resolve, reject) {
            a.nocache = Math.floor(1e6 * Math.random() + 1);
            a.Action = "Send";
            var t = JSON.stringify(a);
            Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (response) {
                resolve(response);
            }, function (error) {
                reject("Failed to send message");
            });
        });
    },
    ajaxPost: function (url, data, successCallback, errorCallback) {
        var request = Email.createCORSRequest("POST", url);
        if (!request) {
            errorCallback("CORS not supported");
            return;
        }
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.onload = function () {
            var response = request.responseText;
            if (successCallback) {
                successCallback(response);
            }
        };
        request.onerror = function () {
            if (errorCallback) {
                errorCallback("Error occurred during AJAX POST");
            }
        };
        request.send(data);
    },
    ajax: function (url, successCallback, errorCallback) {
        var request = Email.createCORSRequest("GET", url);
        if (!request) {
            errorCallback("CORS not supported");
            return;
        }
        request.onload = function () {
            var response = request.responseText;
            if (successCallback) {
                successCallback(response);
            }
        };
        request.onerror = function () {
            if (errorCallback) {
                errorCallback("Error occurred during AJAX GET");
            }
        };
        request.send();
    },
    createCORSRequest: function (method, url) {
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
            xhr.open(method, url, true);
        } else if (typeof XDomainRequest != "undefined") {
            xhr = new XDomainRequest();
            xhr.open(method, url);
        } else {
            xhr = null;
        }
        return xhr;
    }
};
export default Email;