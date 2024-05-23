import { TariffType } from '@/components'

export const tariffData: TariffType[] = [
  {
    items: [
      {
        hint: 'You are given 15 sec in\u00A0a\u00A010-min long ad\u00A0block. The recommended video length is\u00A0up\u00A0to\u00A015 sec',
        id: 'starter-1',
        name: 'each 10 min',
        value: '15 sec',
      },
      {
        id: 'starter-2',
        name: 'per hour',
        value: '6 times',
      },
      {
        id: 'starter-3',
        name: 'per day',
        value: '48 times',
      },
    ],
    pay: '$3000/month',
    text: 'If you choose the Starter Boost plan your advertising shows:',
    title: 'Starter Boost',
    type: 'standard',
  },
  {
    items: [
      {
        hint: 'You are given 30 sec in\u00A0a\u00A010-min long ad\u00A0block. The recommended video length is\u00A0up\u00A0to\u00A015 sec',
        id: 'performance-1',
        name: 'each 10 min',
        value: '30 sec',
      },
      {
        id: 'performance-2',
        name: 'per hour',
        value: '12 times',
      },
      {
        id: 'performance-3',
        name: 'per day',
        value: '96 times',
      },
    ],
    pay: '$4000/month',
    text: 'If you choose the Performance Pro plan your advertising shows:',
    title: 'Performance pro',
    type: 'standard',
  },
  {
    items: [
      {
        hint: 'You are given 45 sec in\u00A0a\u00A010-min long ad\u00A0block. The recommended video length is\u00A0up\u00A0to\u00A015 sec',
        id: 'elite-1',
        name: 'each 10 min',
        value: '45 sec',
      },
      {
        id: 'elite-2',
        name: 'per hour',
        value: '18 times',
      },
      {
        id: 'elite-3',
        name: 'per day',
        value: '144 times',
      },
    ],
    pay: '$5000/month',
    text: 'If you choose the Elite Exposure plan your advertising shows:',
    title: 'Elite Exposure',
    type: 'standard',
  },
  {
    items: [
      {
        hint: 'You are given 60 sec in\u00A0a\u00A010-min long ad\u00A0block. The recommended video length is\u00A0up\u00A0to\u00A015 sec',
        id: 'premium-1',
        name: 'each 10 min',
        value: '60 sec',
      },
      {
        id: 'premium-2',
        name: 'per hour',
        value: '24 times',
      },
      {
        id: 'premium-3',
        name: 'per day',
        value: '192 times',
      },
    ],
    pay: '$6000/month',
    text: 'If you choose the Elite Exposure plan your advertising shows:',
    title: 'premium Impact',
    type: 'standard',
  },
  {
    additionalText:
      'Event rental is available for a minimum of two hours, while other terms are discussed individually',
    gallery: [
      {
        alt: '1',
        basePath: '/assets/images/gallery/air-cinema',
      },
      {
        alt: '2',
        basePath: '/assets/images/gallery/family-home',
      },
      {
        alt: '3',
        basePath: '/assets/images/gallery/friends-selfie',
      },
      {
        alt: '4',
        basePath: '/assets/images/gallery/gender-reveal-party',
      },
      {
        alt: '1',
        basePath: '/assets/images/gallery/air-cinema',
      },
      {
        alt: '2',
        basePath: '/assets/images/gallery/family-home',
      },
      {
        alt: '3',
        basePath: '/assets/images/gallery/friends-selfie',
      },
      {
        alt: '4',
        basePath: '/assets/images/gallery/gender-reveal-party',
      },
    ],
    items: [
      {
        id: 'exclusive-event-1',
        name: '1 day',
        value: '$1000',
      },
      {
        id: 'exclusive-event-2',
        name: '3 days (-10%)',
        value: '$900 /day',
      },
    ],
    pay: '$5000/hour(min 2)',
    text: 'The Exclusive Event is designed specifically for all of\u00A0your events',
    title: 'Exclusive Event',
    type: 'exclusive',
  },
  {
    gallery: [
      {
        alt: '1',
        basePath: '/assets/images/gallery/air-cinema',
      },
      {
        alt: '2',
        basePath: '/assets/images/gallery/family-home',
      },
      {
        alt: '3',
        basePath: '/assets/images/gallery/friends-selfie',
      },
      {
        alt: '4',
        basePath: '/assets/images/gallery/gender-reveal-party',
      },
      {
        alt: '1',
        basePath: '/assets/images/gallery/air-cinema',
      },
      {
        alt: '2',
        basePath: '/assets/images/gallery/family-home',
      },
      {
        alt: '3',
        basePath: '/assets/images/gallery/friends-selfie',
      },
      {
        alt: '4',
        basePath: '/assets/images/gallery/gender-reveal-party',
      },
    ],
    pay: '$30.000/month',
    text: 'The Exclusive Business is the best choice for your personal needs',
    title: 'Exclusive Business',
    type: 'exclusive',
  },
]
