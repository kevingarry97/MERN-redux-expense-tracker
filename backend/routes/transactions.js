const express = require("express");
const { Transaction } = require("../model/transaction");

const router = express.Router();

router.get("/", async (req, res) => {
  const transaction = await Transaction.find();
  res.status(200).send(transaction);
});

router.post("/", async (req, res) => {
  let transaction = new Transaction({
    text: req.body.text,
    amount: req.body.amount,
  });

  await transaction.save();
  res.status(200).send(transaction);
});

router.delete("/:id", async (req, res) => {
  const transaction = await Transaction.findByIdAndRemove(req.params.id);
  if (!transaction) return res.status(404).send(`No Transaction`);

  res.status(200).send(transaction);
});

module.exports = router;
