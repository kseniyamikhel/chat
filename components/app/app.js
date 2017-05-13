(function(){
    'use strict';
    const Messages = window.Messages;
    const Form = window.Form;
    const User = window.User;

    class App {
        constructor({el}){
            this.el = el;
            this._createComponents();
            this._initComponents();
        }

        _createComponents(){
            this.userWrap = document.createElement('div');
            this.userWrap.id = 'userWrap';
            this.formWrap = document.createElement('div');
            this.formWrap.id = 'formWrap';
            this.messagesWrap = document.createElement('div');
            this.messagesWrap.id = 'messagesWrap';
            this.el.appendChild(this.userWrap);
            this.el.appendChild(this.messagesWrap);
            this.el.appendChild(this.formWrap);
        }

        _initComponents(){
            let user = new User({el: this.userWrap});
            user.render();
           user.onSubmit = (username) => {
                this.username = username;
            };
            let form = new Form({el: this.formWrap});
            form.render();
            let messages = new Messages({el: this.messagesWrap});
            messages.render();
            form.onSubmit = (message) => {
                messages.addMessage(this.username || 'Anonymous', message);
                messages.render();
                form.render();
            };
        }

    }

    window.App = App;
})();