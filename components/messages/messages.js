(function(){
    'use strict';
    //import
    const tmpl = window.chatTmpl;

    class Messages{
        constructor({el, data = {messages: []}}){
            this.el = el;
            this.data = data;
        }
        render(){
            /*let messagesHTML = this.data.messages.map(mData => {
                return `<div class="messages__message">
                    <span class="message__author">${mData.username}</span>
                    <span class="message__time">${mData.time.toLocaleString('ru', { hour: '2-digit', minute: '2-digit' })}</span><br />
                    <div class="message__content">${mData.message}</div>
                    
                </div>`
            }).join('');
            this.el.innerHTML = `${messagesHTML}`;*/
            this.el.innerHTML = tmpl(this.data);
        }
        addMessage(username, messageContent){
            let message = {
                username: username,
                messageContent: messageContent.message,
                time: messageContent.time
            };
            this.data.messages.push(message);
        }
    }

    window.Messages = Messages;
})();