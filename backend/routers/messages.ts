import express from 'express';
import fileDb from "../fileDb";
import {MessageWithoutId} from "../types";

const messagesRouter = express.Router();

messagesRouter.get('/', async (req, res) => {
  const messages = await fileDb.getItems();
  res.send(messages);
});

// messagesRouter.get('/:id', async (req, res) => {
//   const products = await fileDb.getItems();
//   const product = products.find(p => p.id === req.params.id);
//   if(!product) {
//     return res.sendStatus(404);
//   }
//
//   res.send(product);
// });

messagesRouter.post('/', async (req, res) => {
  const message: MessageWithoutId = {
    author: req.body.author,
    message: req.body.message,
  };

  console.log(req.body)

  const savedMessage = await fileDb.addItem(message);
  res.send(savedMessage);
});

export default messagesRouter;
