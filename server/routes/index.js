
import express from'express';
const { Router } = express;
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=> {
  let iconSet=[ "🍕","🥐","🍷"];
  let icon = iconSet[ Math.floor(Math.random()*3)];
  res.render('index', { title: 'DWII-2023A', icon});
});
router.get('/author', (req, res)=>{  
  //creating a view-mode
const author = { 
  "name": "Ana",
        "lastname": "Beristain",
        "twitter": "@anaberi",
        "job": "ITGAM"
 };
 //sending the view-model to be rendered by a view 
 res.render('author',author);
});

export default router;
