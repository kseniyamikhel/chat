(function(){
    'use strict';

    class App {
        constructor({form, messages}){
            this.form = new Form({el: form});
            this.form.render();
            this.messages = new Messages({el: messages});
            this.messages.render();
            this.form.onSubmit = (message) => {
                this.messages.addMessage(message);
                this.messages.render();
                this.form.render();
            };
        }

    }

    window.App = App;
})();