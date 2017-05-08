(function(){
    'use strict';

    class Messages{
        constructor({el, data = {messages: []}}){
            this.el = el;
            this.data = data;
        }
        render(){
            let messagesHTML = this.data.messages.map(mData => {
                return `<div class="messages__message">
                    <span class="message__author">${mData.username}</span><br />
                    <span class="message__content">${mData.message}</span>
                </div>`
            }).join('');
            this.el.innerHTML = `${messagesHTML}`;
        }
        addMessage(message){
            this.data.messages.push(message);
        }
    }

    window.Messages = Messages;
})();