(function(){
    'use strict';

    class Form {
        constructor({el}){
            this.el = el;
            this._onSubmit = this._onSubmit.bind(this);
            this._initEvents();
        }
        onSubmit(message){
            console.info("You should define your own onSubmit!");
            console.log(message);
        }
        render(){
            this.el.innerHTML = `
                <form class="form">
                    <textarea name="message" placeholder="Write your message..." class="form__messagetext" required></textarea>
                    <input type="submit" value="Send" class="form__buttonsubmit" />
			    </form>
            `;
        }
        _initEvents(){
            this.el.addEventListener('submit', this._onSubmit);
        }
        _onSubmit(event){
            event.preventDefault();
            let formData = this._getFormData();
            this.onSubmit(formData);
        }
        _getFormData(){
            let names = this.el.querySelectorAll('[name]');
            let data = {};
            names.forEach(el => {
                data[el.name] = el.value;
            });
            data.time = new Date();
            return data;
        }
    }

    window.Form = Form;
})();