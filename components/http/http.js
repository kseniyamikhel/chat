(function(){
    'use strict';
    class Http {
        constructor({path}){
            this.path = path;
        }
        makeRequest (callback, data = {}, type = 'GET') {

            let req = new XMLHttpRequest();

            req.open(type, this.path, true);

            req.addEventListener('readystatechange', event => {
                if (req.readyState !== 4) {
                    return;
                }

                let respData = JSON.parse(req.responseText);

                callback(respData);
            });

            req.send(JSON.stringify(data));
        }
    }
    window.Http = Http;
})();

