import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from 'react-redux'
import store from './redux/store';
import App from './App';
import { Server,Model, Response } from 'miragejs';

new Server({

  logging:false,

  seeds(server){
    server.db.loadData({
      Users: [
        {id: 1, email:'Admin@Admin.com', password:'1q2w3e4r5t', isAdmin: true},
        {id: 2, email:'emanoel@gmail.com',password:'t5r4e3w2q1',isAdmin: false}
      ],
      Client: [
        {}
      ],
      SalesPerson:[
        {}
      ]
    })
  },

  routes(){
    this.post('/AuthIsUser', (schema, request) => {
      const {email, password} = JSON.parse(request.requestBody) 
      const authUser = schema.db.Users.findBy(index => index.email === email)
      const authUserPassword = schema.db.Users.findBy(index => index.password === password)
      
      if(authUser && authUserPassword){
        return true 
        
      }
      return new Response(400, {some: 'header'}, {errors: [' UserName or Password are Invalid !!']})
    }) 
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

