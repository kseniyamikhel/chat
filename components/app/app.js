(function(){
    'use strict';
    const Messages = window.Messages;
    const Form = window.Form;
    class App {
        constructor({el}){
            this.el = el;
            this._createComponents();
            this._initComponents();
        }

        _createComponents(){
            this.formWrap = document.createElement('div');
            this.formWrap.id = 'formWrap';
            this.messagesWrap = document.createElement('div');
            this.messagesWrap.id = 'messagesWrap';
            this.el.appendChild(this.messagesWrap);
            this.el.appendChild(this.formWrap);
        }

        _initComponents(){
            let form = new Form({el: this.formWrap});
            form.render();
            let messages = new Messages({el: this.messagesWrap});
            messages.render();
            form.onSubmit = (message) => {
                messages.addMessage(message);
                messages.render();
                form.render();
            };
        }

    }

    window.App = App;
})();