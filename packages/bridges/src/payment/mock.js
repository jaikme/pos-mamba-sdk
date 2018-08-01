import SignalFlow from '@mambasdk/signal/src/flow.js';

const MockConfig = {
  amount: 0,
  cvv: undefined,
};

/**
 * Set the amount value for the transaction
 * @param amount Value of the transaction in cents
 */
function setAmount(amount) {
  console.log('SET AMOUNT:', amount);
  MockConfig.amount = amount;
}

function setCvv(cvv) {
  console.log('SET CVV', cvv);
  MockConfig.cvv = cvv;
}

export default function (Payment) {
  SignalFlow(Payment)
    .addEmitter('doStartCardDetectedFlow', null, 'insertAmount')
    .addEmitter('setAmount', setAmount, 'insertCvv')
    .addEmitter('setCvv', setCvv, 'finished')
    .addSignal('finished');
}
