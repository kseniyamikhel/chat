(function(){
    'use strict';
    //import
    const tmpl = window.chatTmpl;

    class Messages{
        constructor({el, data = {messages: []}}){
            this.el = el;
            this.data = data;
        }
        setMessages(chatData){
            this.data.messages = chatData.map(message => ({
                username: message.user,
                messageContent: message.message || message.text,
                time: message.time || message.date|| new Date()
            }));
        }
        render(){
            this.el.innerHTML = tmpl(this.data);
        }
        /*addMessage(username, messageContent){
            let message = {
                username: username,
                messageContent: messageContent.message,
                time: messageContent.time
            };
            this.data.messages.push(message);
        }*/

    }

    window.Messages = Messages;
})();