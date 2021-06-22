let cards = [
    {id: '1', name: 'First Card', status: 'todo', priorety: 2},
    {id: '2', name: 'Second Card', status: 'progress', priorety: 5},
    {id: '3', name: 'Next Card', status: 'review', priorety: 10},  
  ]
  

function routes(app) {
      

    app.get('/', (req, res) => {
        res.send('Hello World--npm World!');
    });
    
    
    app.get('/card', (req, res) => {
        res.send(cards);
    });
    
    app.delete('/card/:cardId', (req, res) => {
        // console.log(req);
        // console.log(req.params.cardId);
        const cardId = req.params.cardId;
        cards = cards.filter(el => el.id !== cardId);
        // console.log(cards);
        // console.log(req.params);
        res.send(cards);
    });
    
    app.post('/card', (req, res) => {
        // console.log(req);
        const card = req.body;
        cards.push({ id: Math.random().toString(), ...card });
        res.send('Card create');
        
    });
    
    app.patch('/card/:cardId', (req, res) => {
        // console.log(req);
        const cardId = req.params.cardId;
        const card = req.body;
        cards = cards.map(el => el.id === cardId ? ({ ...card, id: el.id }) : el);
        
        res.send('Card updated');
        
    });
}

module.exports = routes;