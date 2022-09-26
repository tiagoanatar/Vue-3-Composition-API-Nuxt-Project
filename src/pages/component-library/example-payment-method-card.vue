<script setup lang="ts">
import { Masks } from '~~/src/constants/masks';
import { PaymentMethodCardProps } from '@/components/PaymentMethodCard.vue';
import { paymentCards } from '@/__mocks__/paymentCard';

useHead({
  title: 'AA | Component Library - Payment  Method Card',
});

const figmaDesignLink =
  'https://www.figma.com/file/q9HcS3QfIW2k5TsrC9Tyvd/PF-Dev-%7C-Master-File-All-Sprints?node-id=4630%3A84612';

/**
 * This is just for demo purposes.
 */
const cardsList: PaymentMethodCardProps[] = paymentCards?.data.cards.map(
  (card, index) => {
    let cardProps: PaymentMethodCardProps = {
      paymentCardTitle: `${card?.cardType?.bankName} ${Masks.CardNumber}${card?.additionalProperties?.cardLast4}`,
      dataTestId: card?.cardReference?.id,
      paymentMethodType: `${card?.cardType?.type} card`,
      paymentCardId: card?.cardReference?.id,
      isExpiredCard:
        new Date(card?.additionalProperties?.cardExpiry).getTime() <
        new Date().getTime(),
    };
    if (index === 2) {
      cardProps = { ...cardProps, isSecuringLoan: true };
    }
    return cardProps;
  }
);

const getCardTypeTitle = (index: number) => {
  switch (index) {
    case 0:
      return 'Payment Card Default:';
    case 1:
      return 'Payment Card Expired:';
    case 2:
      return 'Payment Card displaying securing loan:';
    default:
      return '';
  }
};
</script>

<template>
  <div class="container">
    <h1>Payment Method Card</h1>
    <div class="row">
      <div class="col">
        <hr />
        <h2>Overview</h2>
        <hr />
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-md-4">
        <p class="fs-5">Description:</p>
        <p>
          Component
          <code>PaymentMethodCard</code> responsible for displaying the payment
          methods available to the user
        </p>

        <p class="fs-5">
          <a :href="figmaDesignLink">Figma Link</a>
        </p>

        <p class="fs-5">Libraries:</p>
        <p>N/A</p>

        <p class="fs-5">Additional Notes:</p>
        <p>N/A</p>
      </div>
      <div class="col-12 col-md-8">
        <p class="fs-5">Props:</p>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col" class="col-2">Name</th>
              <th scope="col" class="col-2">Type</th>
              <th scope="col" class="col-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span>paymentCardTitle</span></td>
              <td>
                <span>string</span>
              </td>
              <td>Title of the payment method card.</td>
            </tr>
            <tr>
              <td>paymentMethodType</td>
              <td>
                <span>string</span>
              </td>
              <td>Type of payment method.</td>
            </tr>
            <tr>
              <td>isExpiredCard</td>
              <td>
                <span>boolean</span>
              </td>
              <td>Whether the card is active or expired.</td>
            </tr>
            <tr>
              <td>paymentCardId</td>
              <td>
                <span>string</span>
              </td>
              <td>The card reference id.</td>
            </tr>
            <tr>
              <td>isSecuringLoan</td>
              <td>
                <span>boolean</span>
              </td>
              <td>Whether or not the card is used for securing loan.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <hr />
        <h2>Components Samples</h2>
        <hr />
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div v-for="(card, index) in cardsList" :key="index">
          <p class="mt-5 fs-5">{{ getCardTypeTitle(index) }}</p>
          <PaymentMethodCard v-bind="card" />
        </div>
      </div>
    </div>
  </div>
</template>
