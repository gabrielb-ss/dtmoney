import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freela de site',
          type: 'deposit',
          category: 'Dev',
          amount: 8000,
          createdAt: new Date('2023-08-08 18:25:00'),
        },
        {
          id: 2,
          title: 'Spotify',
          type: 'withdraw',
          category: 'Assinatura',
          amount: 35.9,
          createdAt: new Date('2023-01-09 18:25:00'),
        }
      ],
    })
  },
  
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);  