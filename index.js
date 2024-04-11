import express from 'express';

const app = express();
app.use(express.json());
app.use (express.static('front-end/dist/stress-survey/browser'));
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log('Listening on ')
})
