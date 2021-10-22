export interface PaymentIntent {
  clientSecret: string;
}

export interface PaymentIntentApi {
  error?: { message: string };
  success?: PaymentIntent;
}
