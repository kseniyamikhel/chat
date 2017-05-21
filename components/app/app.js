//import
import {Messages} from '../messages/messages';
import {Form} from '../form/form';
import {User} from '../user/user';
import {Http} from '../http/http';
//const Messages = window.Messages;
//const Form = window.Form;
//const User = window.User;
//const Http = window.Http;

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

        let http = new Http({path: 'https://chat-f30aa.firebaseio.com/messages.json'});
        setTimeout(function refresh() {
            http.makeRequest( data => {
                let chatData = Object.values(data);
                messages.setMessages(chatData);
                messages.render();
            });
            setTimeout(refresh, 500);
        }, 500);

        form.onSubmit = (message) => {
            let sendData = {
                user: this.username || 'Anonymous',
                message: message.message,
                time: message.time
            };
            http.makeRequest( (data => {
                http.makeRequest( data => {
                    let chatData = Object.values(data);
                    messages.setMessages(chatData);
                    messages.render();
                });
            }), sendData, 'POST');
            form.render();
        };
    }

}

//export
window.App = App;