/**
 * Source of truth for the GiyaPay FAQ page.
 *
 * Each entry carries the question, an answer built from simple blocks, and a
 * list of extra keywords. The keywords are only used for searching – they let
 * a visitor type "cash out", "PHP" or "sandbox" and still land on the right
 * answer even when those words never appear in the copy.
 */

export type FaqBlock =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] };

export interface FaqItem {
  id: string;
  category: FaqCategoryId;
  question: string;
  answer: FaqBlock[];
  keywords?: string[];
}

export type FaqCategoryId =
  | 'general'
  | 'getting-started'
  | 'pricing'
  | 'account'
  | 'payment-links'
  | 'payments'
  | 'finance'
  | 'support';

export interface FaqCategory {
  id: FaqCategoryId;
  label: string;
  description: string;
}

export const faqCategories: FaqCategory[] = [
  {
    id: 'general',
    label: 'General Information',
    description: 'What GiyaPay is and how it compares to other payment options.',
  },
  {
    id: 'getting-started',
    label: 'Getting Started',
    description: 'Integration, sandbox testing and going live.',
  },
  {
    id: 'pricing',
    label: 'Pricing & Fees',
    description: 'Transaction fees, MDR rates, VAT and supported currencies.',
  },
  {
    id: 'account',
    label: 'Account Activation',
    description: 'Application requirements, documents and account changes.',
  },
  {
    id: 'payment-links',
    label: 'Payment Links',
    description: 'Getting paid over chat, SMS and email without a website.',
  },
  {
    id: 'payments',
    label: 'Payments & Settlement',
    description: 'Payment methods, payouts, reports, chargebacks and disputes.',
  },
  {
    id: 'finance',
    label: 'Finance & Taxes',
    description: 'Withholding tax, official receipts and accounting questions.',
  },
  {
    id: 'support',
    label: 'Support & Security',
    description: 'Security standards, severity levels and after-sales support.',
  },
];

export const faqItems: FaqItem[] = [
  /* ---------------------------------------------------------------- General */
  {
    id: 'what-is-giyapay',
    category: 'general',
    question: 'What is GiyaPay?',
    answer: [
      {
        type: 'p',
        text: 'GiyaPay is a third-party payment solution that unifies a variety of online payment gateways into one payment button. It aims to provide an easy-to-set-up, easy-to-use online payment system with a simplified user journey for the payor, and consolidated reports for your business.',
      },
    ],
    keywords: ['about', 'overview', 'what does giyapay do', 'payment gateway', 'aggregator'],
  },
  {
    id: 'products-and-services',
    category: 'general',
    question: 'What products and services do you provide?',
    answer: [
      {
        type: 'p',
        text: 'GiyaPay makes payment options more accessible to you with a simple application process, and provides the following services:',
      },
      {
        type: 'ul',
        items: [
          'Flexibility and add-on features for you to choose from.',
          'GiyaPay API that integrates directly with your website, providing payors a seamless payment experience without needing to be redirected outside your page.',
          'GiyaPay links that allow you to send a link anywhere — email, SMS, instant messaging groups, social media and more — that payors can open with just one click. Links can also be issued as QR codes.',
          'A technical team that assists you from integration to account activation, and a support team that answers any queries post-integration.',
        ],
      },
    ],
    keywords: ['services', 'offering', 'api', 'qr code', 'support team', 'integration'],
  },
  {
    id: 'add-on-features',
    category: 'general',
    question: "What are GiyaPay's add-on features?",
    answer: [
      {
        type: 'p',
        text: 'GiyaPay gives you the flexibility to decide on the features below. Each add-on feature may have a corresponding service fee.',
      },
      {
        type: 'p',
        text: 'Determine who will be charged the service fees (payor or merchant). Service fees are charged per transaction and are comprised of fixed transaction fees, gateway MDR, and other applicable fees depending on your merchant account configuration.',
      },
      {
        type: 'ul',
        items: [
          'Payor — when service fees are passed on to the payor, the payor is advised of the applicable fees that may apply per transaction.',
          'Merchant — when you absorb the service fees, the settlement amount paid to you is reduced by the corresponding value. A report is provided through your account.',
        ],
      },
      {
        type: 'p',
        text: 'Determine the gateway type more applicable to you (universal or individualized).',
      },
      {
        type: 'ul',
        items: [
          'Universal MDR — charges one single MDR and provides a simpler accounting process for you.',
          'Individualized MDR — charges the applicable MDR based on the rates provided per payment gateway, a more affordable alternative for you.',
        ],
      },
      { type: 'p', text: 'Decide on additional fields we can activate for you.' },
      {
        type: 'ul',
        items: [
          'Specify Amount — lets the payor enter the amount they want to pay. You can set a minimum amount; if the payor specifies a lower amount, the transaction will not push through. An email field can also be included, and pushing an email confirmation requires a separate activation fee.',
          'Account Code — a free-text field where payors indicate their account reference or subscriber number, helping you identify the account a payment is made for.',
          'Gateway Direct — a unique button per payment gateway, still powered by GiyaPay. It lets you limit and expose only the payment channels you choose to activate.',
        ],
      },
    ],
    keywords: [
      'mdr',
      'universal',
      'individualized',
      'specify amount',
      'account code',
      'gateway direct',
      'minimum amount',
      'customisation',
    ],
  },
  {
    id: 'similar-to-e-wallets',
    category: 'general',
    question: 'Is GiyaPay similar to e-wallets?',
    answer: [
      {
        type: 'p',
        text: 'GiyaPay is not similar to e-wallets. There is no need for the payor to create an account, download an application or register for the service unlike e-wallets. GiyaPay just needs to activate your merchant account and integrate our hosted payment button in your website, and you can easily start to accept payments from various payment channels.',
      },
    ],
    keywords: ['e-wallet', 'ewallet', 'gcash', 'maya', 'difference', 'comparison', 'app download'],
  },
  {
    id: 'how-secure',
    category: 'general',
    question: 'How secure is GiyaPay?',
    answer: [
      {
        type: 'p',
        text: 'GiyaPay uses an SSL encrypted website and is PCI-DSS compliant. Each payment gateway has its own security protocols, including possible 2MFA and OTP, which are at the discretion and responsibility of the payment gateway.',
      },
    ],
    keywords: ['security', 'safe', 'ssl', 'pci dss', 'encryption', 'otp', '2fa', 'fraud'],
  },
  {
    id: 'payor-payment-journey',
    category: 'general',
    question: 'How would payors make a payment?',
    answer: [
      { type: 'p', text: 'Payors can make a payment by:' },
      {
        type: 'ol',
        items: [
          'Clicking the "Pay with GiyaPay" button, or an individual gateway button if that feature is availed.',
          'Filling up the additional fields (if availed) and choosing their preferred payment gateway.',
          'Filling up the details required by their chosen gateway — this portion is hosted by the gateway itself.',
          'Receiving a successful payment notification on their screen once the details are submitted.',
        ],
      },
      {
        type: 'p',
        text: 'Payors can also be redirected to your website where our hosted buttons are integrated, through links or QR codes that we can provide for you.',
      },
    ],
    keywords: ['checkout', 'user journey', 'customer experience', 'how to pay', 'buyer'],
  },

  /* -------------------------------------------------------- Getting started */
  {
    id: 'no-website',
    category: 'getting-started',
    question: 'Can I use GiyaPay if I do not have a website?',
    answer: [
      {
        type: 'p',
        text: 'Yes, through our Payment Link feature. As for the GiyaPay button, we recommend having a hosted domain or a centralized payment page where we can attach the button for your payors to pay. We may provide this simple page for you, or coordinate with the team who built your website to provide it.',
      },
    ],
    keywords: ['without website', 'no site', 'payment link', 'social media selling', 'facebook'],
  },
  {
    id: 'test-vs-live-account',
    category: 'getting-started',
    question: 'What are the differences between test accounts and live accounts?',
    answer: [
      {
        type: 'p',
        text: 'Test accounts, sometimes called the sandbox environment, are an exact replica of the GiyaPay live environment that you can use to test the functionality of the service before making it available to the public. The test account is a safe environment to confirm all expected functionality works before migrating to a live account.',
      },
    ],
    keywords: ['sandbox', 'staging', 'test environment', 'demo account', 'uat'],
  },
  {
    id: 'test-the-api',
    category: 'getting-started',
    question: "How do I test GiyaPay's API?",
    answer: [
      {
        type: 'p',
        text: 'You can test the GiyaPay API through the test account or sandbox environment that we provide during integration.',
      },
    ],
    keywords: ['api', 'sandbox', 'developer', 'integration testing', 'documentation'],
  },
  {
    id: 'create-giyapay-link',
    category: 'getting-started',
    question: 'How do I create a GiyaPay link?',
    answer: [
      { type: 'p', text: 'GiyaPay links are provided by us upon request during integration.' },
    ],
    keywords: ['link', 'setup', 'onboarding'],
  },
  {
    id: 'create-qr-code',
    category: 'getting-started',
    question: 'How do I create a GiyaPay QR code?',
    answer: [
      { type: 'p', text: 'GiyaPay QR codes are provided by us upon request during integration.' },
    ],
    keywords: ['qr', 'qr ph', 'scan to pay'],
  },

  /* ---------------------------------------------------------------- Pricing */
  {
    id: 'vat-inclusive',
    category: 'pricing',
    question: "Are GiyaPay's fees VAT inclusive?",
    answer: [
      {
        type: 'p',
        text: 'Yes, our service fees are already VAT-inclusive. There will be no additional deductions for VAT-related charges.',
      },
    ],
    keywords: ['vat', 'tax', 'inclusive', 'service fee'],
  },
  {
    id: 'transaction-fees',
    category: 'pricing',
    question: 'What are the transaction fees, rates and charges?',
    answer: [
      {
        type: 'p',
        text: "GiyaPay's service charge includes a fixed transaction fee, MDR rates that vary depending on the gateway type (universal or individualized) you choose, and possible additional charges for the add-on features you activate.",
      },
    ],
    keywords: ['price', 'cost', 'how much', 'mdr', 'rates', 'charges', 'commission'],
  },
  {
    id: 'negotiate-rates',
    category: 'pricing',
    question: 'Can transaction fees, rates and charges be negotiated or lowered?',
    answer: [
      {
        type: 'p',
        text: 'Rates vary depending on the volume of transactions. Any transactions that fall below one thousand per day (< 1,000 / day) fall under the standard rates of GiyaPay.',
      },
    ],
    keywords: ['discount', 'negotiation', 'volume', 'custom pricing', 'enterprise'],
  },
  {
    id: 'supported-currencies',
    category: 'pricing',
    question: 'What currencies does GiyaPay support?',
    answer: [
      {
        type: 'p',
        text: 'GiyaPay only supports PHP. Any transactions made from outside the country will be converted to Philippine Peso.',
      },
    ],
    keywords: ['currency', 'php', 'peso', 'usd', 'dollar', 'foreign exchange', 'multi-currency'],
  },
  {
    id: 'international-card-fees',
    category: 'pricing',
    question: 'Are there extra transaction fees for international cards?',
    answer: [
      {
        type: 'p',
        text: 'Currently, GiyaPay can only process transactions for Philippine-based companies with Philippine IP addresses. If a payor pays while abroad to your Philippine-based company with a Philippine-registered website, the transaction will be processed. Any dollar-denominated product is automatically converted using the bank’s current conversion rate. Websites are validated by GiyaPay upon application.',
      },
    ],
    keywords: ['international', 'overseas', 'abroad', 'conversion fee', 'forex', 'foreign card'],
  },

  /* --------------------------------------------------- Account & compliance */
  {
    id: 'how-to-apply',
    category: 'account',
    question: 'How do I apply for GiyaPay and what documents should I submit?',
    answer: [
      {
        type: 'p',
        text: 'Our application process is fully digital. Before activating your account, we need the following information and documents.',
      },
      { type: 'p', text: 'Information:' },
      {
        type: 'ul',
        items: [
          'Nature of business',
          'Type of business (Corporation, Sole Proprietorship, Government or NGO)',
          'TIN number',
        ],
      },
      { type: 'p', text: 'Documents:' },
      {
        type: 'ul',
        items: [
          'Signed Client Agreement Form (contract) via DocuSign',
          "Photocopy of the authorized signatory's valid ID (front and back)",
          "Photocopy of the authorized representative's valid ID (front and back)",
          'Photocopy of your BIR Certificate of Registration',
        ],
      },
      {
        type: 'p',
        text: 'Depending on your type of business, you will also need to submit the following.',
      },
      { type: 'p', text: 'Corporation / Partnership / Cooperative / Association:' },
      {
        type: 'ul',
        items: [
          'Photocopy of Articles of Incorporation / Partnership / Cooperative / Association',
          'Photocopy of By-Laws or General Information Sheet (GIS)',
          "Notarized certificate issued by the corporate, partner's, cooperative's or association's secretary for the authorized signatory",
          'Photocopy of SEC Registration Certificate',
        ],
      },
      { type: 'p', text: 'Sole Proprietorship:' },
      { type: 'ul', items: ['Photocopy of DTI Certificate of Business Name Registration'] },
      { type: 'p', text: 'Optional — eligibility for tax exemption:' },
      {
        type: 'ul',
        items: [
          'Photocopy of Tax Exemption Certificate issued by BIR or an authorized government agency',
        ],
      },
      {
        type: 'p',
        text: 'Optional — for Designated Non-Financial Business Profession (DNFBP):',
      },
      {
        type: 'ul',
        items: [
          'Photocopy of AMLC-issued Certificate of Registration or Provisional Certificate of Registration',
        ],
      },
    ],
    keywords: [
      'requirements',
      'sign up',
      'register',
      'documents',
      'dti',
      'sec',
      'bir',
      'tin',
      'application',
      'onboarding',
      'kyc',
    ],
  },
  {
    id: 'approval-time',
    category: 'account',
    question: 'How long does it take for my account to be approved and activated?',
    answer: [
      {
        type: 'p',
        text: 'After you successfully submit your request for account activation, it typically takes 7 business days for our team to review your application. Our team will email you once your account has been approved, or if we have follow-up questions such as missing documents or clarifications about your business.',
      },
    ],
    keywords: ['approval', 'how long', 'turnaround', 'activation time', 'waiting', 'lead time'],
  },
  {
    id: 'bank-account-name',
    category: 'account',
    question: 'Does the bank account need to be named under the account holder?',
    answer: [
      {
        type: 'p',
        text: 'Yes, the designated bank account for payouts must be in the name of the business (Corporation, Sole Proprietorship, Government or NGO).',
      },
    ],
    keywords: ['bank account', 'name', 'business name', 'payout account'],
  },
  {
    id: 'registered-outside-ph',
    category: 'account',
    question: 'Can I use GiyaPay if my business is registered outside the Philippines?',
    answer: [
      {
        type: 'p',
        text: 'Unfortunately, no. Currently, GiyaPay can only process transactions for Philippine-based companies with Philippine IP addresses.',
      },
    ],
    keywords: ['foreign company', 'overseas business', 'international merchant', 'eligibility'],
  },
  {
    id: 'lock-in-period',
    category: 'account',
    question: 'Is there a lock-in period to use GiyaPay?',
    answer: [
      {
        type: 'p',
        text: 'Yes, there is a one-year lock-in period for using GiyaPay upon signing the contract.',
      },
    ],
    keywords: ['contract', 'commitment', 'term', 'cancel', 'lock in'],
  },
  {
    id: 'change-email',
    category: 'account',
    question: 'Can I change my email address?',
    answer: [
      {
        type: 'p',
        text: 'Yes, you can change your email address upon request. The request form can be found within your merchant dashboard, under After Sales Request and Support.',
      },
    ],
    keywords: ['update email', 'contact details', 'account settings', 'change details'],
  },
  {
    id: 'change-bank-account',
    category: 'account',
    question: 'How do I change my bank account?',
    answer: [
      {
        type: 'p',
        text: 'You may change your bank account upon request. The request form can be found within your merchant dashboard, under After Sales Request and Support.',
      },
    ],
    keywords: ['update bank', 'payout account', 'change bank details'],
  },
  {
    id: 'disable-account',
    category: 'account',
    question: 'How do I disable my account?',
    answer: [
      {
        type: 'p',
        text: 'You may disable your account upon request. The request form can be found within your merchant dashboard, under After Sales Request and Support.',
      },
    ],
    keywords: ['close account', 'deactivate', 'terminate', 'cancel account'],
  },

  /* ---------------------------------------------------------- Payment links */
  {
    id: 'what-is-payment-link',
    category: 'payment-links',
    question: 'What is a GiyaPay Payment Link?',
    answer: [
      {
        type: 'p',
        text: 'A GiyaPay Payment Link allows you to accept payments through SMS, chat or email by sending the payor a generated link.',
      },
    ],
    keywords: ['payment link', 'link', 'sms', 'chat', 'email', 'viber', 'messenger', 'whatsapp'],
  },
  {
    id: 'where-payment-links-used',
    category: 'payment-links',
    question: 'Where can Payment Links be used?',
    answer: [
      {
        type: 'p',
        text: 'Payment links can be embedded into emails, sent as a text, or shared directly through social media messaging apps. The payor can open the link using any browser.',
      },
    ],
    keywords: ['channels', 'social media', 'messenger', 'telegram', 'viber', 'sms'],
  },
  {
    id: 'how-payment-links-work',
    category: 'payment-links',
    question: 'How do Payment Links work?',
    answer: [
      { type: 'p', text: 'Payment links work in three steps:' },
      { type: 'ol', items: ['Generate a payment link', 'Share the link', 'Accept payments'] },
    ],
    keywords: ['steps', 'how it works', 'process'],
  },
  {
    id: 'generate-payment-link',
    category: 'payment-links',
    question: 'How can I generate a Payment Link?',
    answer: [
      {
        type: 'ol',
        items: [
          'Click on the Payment Links menu in your dashboard.',
          'Click the "Generate Payment Link" button.',
          'Fill in the details such as "Amount to Pay" and other fields. The amount field only allows numbers 0–9 and one period character.',
          'Set the expiry date and time. Clicking the "Expiry Date" field opens a calendar pop-up; use the pink clock icon at the lower part of the pop-up to set the time.',
          'Review your details, then click Submit.',
        ],
      },
    ],
    keywords: ['generate', 'create link', 'dashboard', 'expiry date', 'amount to pay'],
  },
  {
    id: 'view-payment-link-status',
    category: 'payment-links',
    question: 'How can I view the status of my generated Payment Links?',
    answer: [
      {
        type: 'p',
        text: 'Click on the Payment Links menu in your dashboard. You will see a table showing the date generated, link, amount, status, description and expiry date. Newly generated links are added to the top of the table with a default "Pending" status.',
      },
    ],
    keywords: ['status', 'pending', 'paid', 'dashboard', 'track link'],
  },
  {
    id: 'payment-link-no-website',
    category: 'payment-links',
    question: "Do I need a website to avail of GiyaPay's Payment Link feature?",
    answer: [
      {
        type: 'p',
        text: "There is no need for a website to avail of GiyaPay's Payment Link feature. You may receive payment via chat, SMS or email through the generated link.",
      },
    ],
    keywords: ['no website', 'without website', 'requirement'],
  },
  {
    id: 'payment-link-timezone',
    category: 'payment-links',
    question: 'What time zone does the Payment Link follow?',
    answer: [{ type: 'p', text: 'All date and time values are on GMT +08:00.' }],
    keywords: ['timezone', 'gmt', 'philippine time', 'expiry time'],
  },
  {
    id: 'customize-link-url',
    category: 'payment-links',
    question: 'Can I customize the URL of a Payment Link?',
    answer: [
      {
        type: 'p',
        text: 'Unfortunately, we do not support customizing the payment link URL, but you can use a third-party URL shortener that redirects to the payment link instead.',
      },
    ],
    keywords: ['custom url', 'branded link', 'shortener', 'vanity url'],
  },
  {
    id: 'links-expire',
    category: 'payment-links',
    question: 'Do GiyaPay Payment Links expire?',
    answer: [
      {
        type: 'p',
        text: 'Yes, GiyaPay Payment Links expire depending on the date and time you set when generating the link.',
      },
    ],
    keywords: ['expiry', 'expire', 'validity', 'deadline'],
  },
  {
    id: 'reuse-expired-link',
    category: 'payment-links',
    question: 'Can I reuse an expired Payment Link?',
    answer: [
      {
        type: 'p',
        text: 'You cannot reuse an expired payment link. You need to generate a new payment link if the payor missed paying within the allotted time.',
      },
    ],
    keywords: ['expired', 'reuse', 'resend', 'regenerate'],
  },
  {
    id: 'reopen-closed-link',
    category: 'payment-links',
    question: 'The payor accidentally closed the payment page — can they re-open the link?',
    answer: [
      {
        type: 'p',
        text: 'Yes. Payors can access the link again and pay, as long as the payment link status is not EXPIRED or PAID.',
      },
    ],
    keywords: ['closed page', 'reopen', 'retry', 'abandoned'],
  },
  {
    id: 'cancelled-link',
    category: 'payment-links',
    question: 'Can payment links with a "cancelled" status be opened again?',
    answer: [
      {
        type: 'p',
        text: 'Yes. When payors open the link again, they will be able to access the payment page and proceed with the transaction.',
      },
    ],
    keywords: ['cancelled', 'canceled', 'status', 'reopen'],
  },
  {
    id: 'payment-past-expiry',
    category: 'payment-links',
    question:
      'A link expires at 5 PM. The payor opened it before then and paid after 5 PM — is the payment counted?',
    answer: [
      {
        type: 'p',
        text: 'Yes. The payment is counted, and the status of the link in the Payment Link Dashboard changes to "Paid".',
      },
    ],
    keywords: ['expiry', 'grace', 'late payment', 'counted'],
  },

  /* --------------------------------------------------- Payments & settlement */
  {
    id: 'available-payment-methods',
    category: 'payments',
    question: 'What payment methods are available with GiyaPay?',
    answer: [
      { type: 'p', text: 'GiyaPay can accept payments through:' },
      { type: 'p', text: 'Credit or debit cards' },
      { type: 'ul', items: ['Mastercard', 'UnionPay', 'Visa'] },
      { type: 'p', text: 'e-Wallets' },
      { type: 'ul', items: ['Alipay', 'GCash', 'GrabPay', 'PayMaya (coming soon)', 'WeChat Pay'] },
      { type: 'p', text: 'Online banking' },
      { type: 'ul', items: ['InstaPay'] },
    ],
    keywords: [
      'payment methods',
      'channels',
      'visa',
      'mastercard',
      'gcash',
      'grabpay',
      'alipay',
      'wechat',
      'paymaya',
      'instapay',
      'unionpay',
      'credit card',
      'debit card',
      'online banking',
    ],
  },
  {
    id: 'payment-successful',
    category: 'payments',
    question: 'How do I know if a payment is successful?',
    answer: [
      {
        type: 'p',
        text: 'Successful payments are indicated in your merchant dashboard. The dashboard is updated in real time and only shows transactions that have been successful — a successful payment is marked as "Paid".',
      },
    ],
    keywords: ['confirmation', 'notification', 'paid', 'dashboard', 'real time'],
  },
  {
    id: 'payor-notification',
    category: 'payments',
    question: 'How do payors get notified of a successful payment?',
    answer: [
      {
        type: 'p',
        text: 'Payors are shown a "Successful Confirmation" page once the transaction is deemed successful.',
      },
    ],
    keywords: ['receipt', 'confirmation page', 'customer notification'],
  },
  {
    id: 'when-payouts',
    category: 'payments',
    question: 'How and when will I receive my payments from payors?',
    answer: [
      {
        type: 'p',
        text: 'We follow a T+1/2 settlement with a cut-off at 9 PM every day. All purchase and sale transactions done on T day are settled on a T+2 basis, where T is the trading day and +2 is two consecutive working days after, excluding holidays. Payments are deposited straight to the nominated bank account indicated in your signed contract.',
      },
    ],
    keywords: [
      'payout',
      'settlement',
      'cut off',
      'when do i get paid',
      'deposit',
      'cash out',
      't+1',
      't+2',
      'schedule',
    ],
  },
  {
    id: 'minimum-payout',
    category: 'payments',
    question: 'What is the minimum amount needed to receive my payout?',
    answer: [
      {
        type: 'p',
        text: 'We do not require a minimum amount. Instead, there is a minimum number of transactions per day needed to receive payouts:',
      },
      {
        type: 'ul',
        items: [
          'For T+2 settlement: at least 10 transactions per day.',
          'For T+1 settlement: at least 50 transactions per day.',
        ],
      },
    ],
    keywords: ['minimum', 'threshold', 'payout requirement', 'transactions per day'],
  },
  {
    id: 'payouts-to-ewallets',
    category: 'payments',
    question: 'Can you issue payouts to e-wallets like GCash or PayMaya?',
    answer: [
      {
        type: 'p',
        text: 'We can only issue payouts to your nominated bank account, not to e-wallets.',
      },
    ],
    keywords: ['payout', 'gcash', 'paymaya', 'ewallet', 'withdraw'],
  },
  {
    id: 'payout-delayed',
    category: 'payments',
    question: 'Why is my payout being delayed?',
    answer: [
      { type: 'p', text: 'Common reasons why payouts might be delayed are:' },
      {
        type: 'ol',
        items: [
          'Account verification issues — a GiyaPay representative will reach out to you directly via email explaining why your payout is being held back.',
          'Misunderstanding of the payout schedule — GiyaPay follows a T+1/2 settlement, which means payouts are processed to your account the next day or the day after.',
          "Transfers still being processed by the bank — reflection of the payout depends on your receiving bank's schedule. It often reflects within the day, but some banks take one to two days to process the transfer.",
          'Incorrect bank account details — a GiyaPay representative will reach out to you directly via email asking you to update your bank account details.',
        ],
      },
    ],
    keywords: ['delay', 'late payout', 'missing payout', 'not received', 'troubleshoot'],
  },
  {
    id: 'allowed-payout-banks',
    category: 'payments',
    question: 'Which banks are allowed for payouts?',
    answer: [
      { type: 'p', text: 'The following banks are allowed for payouts:' },
      {
        type: 'ul',
        items: [
          'Australia and New Zealand Bank (ANZ) – Philippines',
          'Asia United Bank (AUB)',
          'Bangkok Bank – Manila',
          'Bank of China – Manila',
          'Bank of Commerce',
          'Banco De Oro (BDO) Unibank',
          'Bank of the Philippine Islands (BPI)',
          'Chinabank',
          'Citibank Manila',
          'CTBC Bank – Philippines',
          'Development Bank of the Philippines',
          'Deutsche Bank – Manila',
          'EastWest Bank',
          'HSBC – Philippines',
          'JPMorgan Chase Bank Manila',
          'KEB Hana Bank – Manila',
          'LANDBANK',
          'Maybank Philippines',
          'Mega International Commercial Bank – Manila',
          'Metrobank',
          'Mizuho Bank – Manila',
          'MUFG Bank – Manila',
          'PBCOM',
          'Philtrust Bank',
          'Philippine National Bank (PNB)',
          'Philippine Savings Bank (PSBank)',
          'Rizal Commercial Banking Corporation (RCBC)',
          'Security Bank',
        ],
      },
      {
        type: 'p',
        text: 'Should your bank not be included in the list, you may email your customer success manager (CSM) or email us at info@bims.tech.',
      },
    ],
    keywords: [
      'banks',
      'bdo',
      'bpi',
      'metrobank',
      'landbank',
      'unionbank',
      'rcbc',
      'security bank',
      'payout bank list',
    ],
  },
  {
    id: 'accept-payments-abroad',
    category: 'payments',
    question: 'Can I accept payments from outside the Philippines?',
    answer: [
      {
        type: 'p',
        text: "You may accept payments from outside the Philippines, but GiyaPay can only process them in Philippine Peso. Payments made in other currencies may be charged an extra conversion fee by the payor's bank abroad to convert payments into Philippine Peso.",
      },
    ],
    keywords: ['abroad', 'overseas payors', 'international', 'ofw', 'conversion'],
  },
  {
    id: 'transaction-limits',
    category: 'payments',
    question: 'What are the minimum and maximum transaction values per payment method?',
    answer: [
      {
        type: 'p',
        text: 'Transaction limits are defined by the guidelines of each e-wallet or payment processor. GiyaPay does not define the limit per payment method.',
      },
    ],
    keywords: ['limit', 'maximum', 'minimum', 'cap', 'per transaction'],
  },
  {
    id: 'failed-payments',
    category: 'payments',
    question: 'Why do payments fail or get declined?',
    answer: [
      { type: 'p', text: 'The most common reasons for failed or declined payments are:' },
      {
        type: 'ol',
        items: [
          'Invalid details — make sure the details provided to the chosen gateway are accurate.',
          'Bank declines — banks have their own criteria for online payments. Payors may need to call their bank to allow the transaction to proceed.',
          'Failure to authenticate — some payment methods require an OTP sent via SMS. Without it, the transaction will not be authorized.',
          'Insufficient funds — payors should check their balance before retrying the transaction.',
        ],
      },
    ],
    keywords: ['failed', 'declined', 'error', 'unsuccessful', 'otp', 'troubleshoot', 'rejected'],
  },
  {
    id: 'refunds',
    category: 'payments',
    question: 'Do you refund payments?',
    answer: [
      {
        type: 'p',
        text: "Unfortunately, we do not process refunds. Requests for refunds, returns and/or exchanges shall be made directly with the merchant concerned, in accordance with that merchant's own policies.",
      },
    ],
    keywords: ['refund', 'return', 'exchange', 'reversal', 'money back'],
  },
  {
    id: 'chargebacks',
    category: 'payments',
    question: 'What happens when there is a chargeback?',
    answer: [
      {
        type: 'p',
        text: 'Once a chargeback is filed, the value is deducted from the security bond you place upon signing with us. We hold the equivalent value for 30 days — the grace period given by banks to dispute any billed transaction made on a credit card. After 30 days, if the dispute is deemed valid, that amount becomes part of the credited value due to your account on the 31st day, together with your daily sales, excluding the current day’s hold-out amount.',
      },
    ],
    keywords: ['chargeback', 'dispute', 'security bond', 'fraud', 'reversal'],
  },
  {
    id: 'hold-out-threshold',
    category: 'payments',
    question: 'Is there a daily transaction threshold for hold out?',
    answer: [
      {
        type: 'p',
        text: 'Once the value of transactions over the internet through GiyaPay exceeds One Million Pesos (PHP 1,000,000.00), we begin to hold out two percent (2%) per transaction and charge succeeding chargebacks against that hold-out value.',
      },
      {
        type: 'p',
        text: 'You will be provided the disputes made and the corresponding chargeback value that will be deducted from the total sales due to you that day.',
      },
    ],
    keywords: ['hold out', 'holdout', 'reserve', 'threshold', '2%', 'one million'],
  },
  {
    id: 'transaction-report',
    category: 'payments',
    question: 'How do I create a transaction report?',
    answer: [
      {
        type: 'p',
        text: 'Your merchant dashboard lets you download your transaction report. Click the icon beside "Transactions" and a CSV file of your transaction report will be ready for download. Daily reports are also available under the Reports tab in the upper right of your dashboard.',
      },
    ],
    keywords: ['report', 'csv', 'export', 'download', 'reconciliation', 'accounting'],
  },
  {
    id: 'daily-reports',
    category: 'payments',
    question: 'Do you provide daily transaction reports?',
    answer: [
      {
        type: 'p',
        text: 'Yes. Our daily transaction reports cover transactions from 9:01 PM the day before (T-1) until 9 PM of the current day (T0).',
      },
    ],
    keywords: ['daily report', 'cut off', 'reporting window', 'reconciliation'],
  },
  {
    id: 'report-contents',
    category: 'payments',
    question: 'What is included in the downloadable report?',
    answer: [
      { type: 'p', text: 'Your downloadable reports include the following information:' },
      {
        type: 'ul',
        items: [
          'Date',
          'Reference number',
          'Net amount',
          'Hold-out columns — percent (%), amount (PHP) and release date',
          'Status',
          'Description',
          'Payment option',
        ],
      },
    ],
    keywords: ['report fields', 'columns', 'csv', 'reference number', 'net amount'],
  },

  /* ---------------------------------------------------------------- Finance */
  {
    id: 'withholding-tax',
    category: 'finance',
    question: 'Does GiyaPay deduct withholding tax from my sales?',
    answer: [
      {
        type: 'p',
        text: 'No, GiyaPay does not deduct withholding tax from your sales. GiyaPay only serves as the payment service provider that facilitates C2B transactions for our clients. Your prices should already be tax-inclusive.',
      },
    ],
    keywords: ['withholding', 'tax', 'bir', 'ewt', 'deduction'],
  },
  {
    id: 'official-receipts',
    category: 'finance',
    question: 'Will GiyaPay issue official receipts?',
    answer: [
      {
        type: 'p',
        text: 'GiyaPay can only issue receipts for the services rendered to you or the payor — whoever carries the burden of paying GiyaPay’s service fees.',
      },
    ],
    keywords: ['official receipt', 'or', 'invoice', 'bir receipt'],
  },
  {
    id: 'receipts-to-payor',
    category: 'finance',
    question: 'Does GiyaPay issue receipts to the payor?',
    answer: [
      {
        type: 'p',
        text: 'No, we do not issue receipts to the payor — receipts are issued by the business. GiyaPay is only a payment integrator.',
      },
    ],
    keywords: ['receipt', 'customer receipt', 'invoice', 'proof of payment'],
  },

  /* ---------------------------------------------------------------- Support */
  {
    id: 'after-sales-support',
    category: 'support',
    question: 'How do I request after-sales support?',
    answer: [
      {
        type: 'p',
        text: 'After-sales support and requests are available on your GiyaPay merchant dashboard. Select the type of after-sales support needed: inquiry, request, or issues and concerns.',
      },
      {
        type: 'p',
        text: 'You may also reach your customer success manager (CSM) or email us at info@bims.tech.',
      },
    ],
    keywords: ['support', 'help', 'contact', 'csm', 'customer service', 'ticket', 'email'],
  },
  {
    id: 'severity-levels',
    category: 'support',
    question: 'What are the security levels and SLA severities?',
    answer: [
      { type: 'p', text: 'Critical severity (P0)' },
      {
        type: 'ul',
        items: [
          'The system is down and the majority or all transactions and operations within the platform are affected.',
          'The issue causes a full outage or makes a critical function of the product unavailable for everyone, without any known workaround.',
        ],
      },
      { type: 'p', text: 'High severity (P1)' },
      {
        type: 'ul',
        items: [
          'Any fault so critical to a release that you would hold the release to fix it.',
          'Any fault causing the failure of a critical feature with substantial impact on the business.',
          'Significant loss of visibility of application performance, or irreparable loss of data within the application, such as the system being unreachable from multiple locations.',
          'A client-declared critical issue with the concurrence of client and service provider management.',
          'Any fault that keeps the system from meeting documented standards, performance specifications, or regulatory and safety standards.',
        ],
      },
      { type: 'p', text: 'Medium severity (P2)' },
      {
        type: 'ul',
        items: [
          'Any fault causing the failure of a non-critical feature of the application.',
          'The application is running at degraded capacity with potential risk of losing critical data.',
          'Failures in application performance requiring additional dedicated resources to maintain core application elements.',
          'Discovery of an application bug with no short-term workaround.',
        ],
      },
      { type: 'p', text: 'Low severity (P3)' },
      {
        type: 'ul',
        items: [
          'Loss of administrative capabilities that are neither high nor medium severity.',
          'Loss of full feature functionality that is neither high nor medium severity.',
          'Discovery of an application bug with a short-term workaround.',
          'Any remote upgrade or support not associated with resolving a high or medium severity issue.',
        ],
      },
    ],
    keywords: ['sla', 'severity', 'p0', 'p1', 'p2', 'p3', 'downtime', 'incident', 'uptime'],
  },
  {
    id: 'merchant-dashboard',
    category: 'support',
    question: 'How do I use the merchant dashboard and download reports?',
    answer: [
      {
        type: 'ol',
        items: [
          'Log in to your merchant dashboard with the credentials provided to you.',
          'Download your daily transaction reports as a CSV by clicking the download icon.',
          'Click "Download CSV" to proceed with the download.',
          'To access your daily reports, click the Reports tab at the upper right of your dashboard. These reports are also downloadable.',
        ],
      },
    ],
    keywords: ['dashboard', 'login', 'reports', 'csv', 'merchant portal'],
  },
];

/** Plain-text haystack per FAQ item, used by the search box. */
export const faqSearchIndex: { id: string; haystack: string }[] = faqItems.map(item => {
  const answerText = item.answer
    .map(block => (block.type === 'p' ? block.text : block.items.join(' ')))
    .join(' ');
  const category = faqCategories.find(c => c.id === item.category)?.label ?? '';

  return {
    id: item.id,
    haystack:
      `${item.question} ${answerText} ${(item.keywords ?? []).join(' ')} ${category}`.toLowerCase(),
  };
});

/** Shown as quick-start chips under the search box. */
export const popularSearches = [
  'payout schedule',
  'transaction fees',
  'payment link',
  'requirements',
  'refund',
  'GCash',
];
