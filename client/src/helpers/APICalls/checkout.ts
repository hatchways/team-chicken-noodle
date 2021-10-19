import { FetchOptions } from '../../interface/FetchOptions';
import { PaymentIntentApi } from '../../interface/paymentIntent';

export async function getPaymentIntent(amount: number, id: string): Promise<PaymentIntentApi> {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount: amount }),
    credentials: 'include',
  };
  return await fetch(`/request/${id}/pay`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: {
        message: 'Unable to connect to server. Please try again',
      },
    }));
}
