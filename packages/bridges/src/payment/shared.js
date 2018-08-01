import SignalHandler from '@mambasdk/signal/src/handler.js';

export default function (Payment) {
  const PaymentSignals = SignalHandler(Payment);

  Payment.startCardDetectedFlow = (paymentComponent) => {
    PaymentSignals.on('insertAmount', () =>
      paymentComponent.fire('step:insertAmount'))
      .on('insertCvv', () => paymentComponent.fire('step:insertCvv'))
      .on('finished', () => {
        paymentComponent.fire('step:finish');
        PaymentSignals.destroy();
      });
    Payment.doStartCardDetectedFlow();
  };
}
