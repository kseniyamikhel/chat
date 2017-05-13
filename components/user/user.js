(function(){
    'use strict';

    class User{
        constructor({el}){
            this.el = el;
            this._onSubmit = this._onSubmit.bind(this);
            this._initEvents();
        }

        render(){
            this.el.innerHTML = `
                <form class="userForm">
                    <span>Hi! Name yourself, please: </span>
                    <input type="text" name="username" placeholder="Your name" class="userForm__username" required/>
                    <input type="submit" value="OK" class="userForm__buttonsubmit" />
			    </form>
            `;
        }
        onSubmit(username){
            console.info('You should define your own onSubmit!');
            console.log(username);
        }
        _initEvents(){
            this.el.addEventListener('submit', this._onSubmit);
        }
        _onSubmit(event){
            event.preventDefault();
            let formData = this._getFormData();
            this.welcome(formData.username);
            this.onSubmit(formData.username);

        }
        welcome(username){
            this.el.innerHTML = `
                <div class="welcome">
                    <span class="welcome__content">Welcome, ${username}!</span>  
                </div>
            `;
        }
        _getFormData(){
            let names = this.el.querySelectorAll('[name]');
            let data = {};
            names.forEach(el => {
                data[el.name] = el.value;
            });
            return data;
        }
    }

    window.User = User;
})();
