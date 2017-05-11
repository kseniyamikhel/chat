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
                    <span class="message__author">${mData.username}</span>
                    <span class="message__time">${mData.time.getHours() + ':' + mData.time.getMinutes()}</span><br />
                    <div class="message__content">${mData.message}</div>
                    
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