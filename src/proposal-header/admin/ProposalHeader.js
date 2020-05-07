export const proposalHeaders = [
  {
    title: 'Account',
    fields: [
      {
        label: 'Lead Country',
        value: 'leadCountry',
        required: true
      },
      { label: 'Account', value: 'account', required: true },
      { label: 'Customer Search', value: 'customer' },
      { label: 'Bill To', value: 'billTo' },
      {
        label: 'Distributor Account',
        value: 'distributorAccount'
      },
      {
        label: 'Tier2 Account',
        value: 'tier2Account'
      }
    ]
  },
  {
    title: 'Pricing',
    fields: [
      {
        label: 'Expected Start Date',
        value: 'startDate',
        type: 'date'
      },
      {
        label: 'Term Length (Months)',
        value: 'termLengthMonths',
        type: 'select',
        options: [
          { label: '', value: '' },
          { label: '12 Months', value: '12' },
          { label: '36 Months', value: '36' },
          { label: '48 Months', value: '48' }
        ]
      },
      {
        label: 'Expected End Date',
        value: 'endDate',
        type: 'date'
      },
      {
        label: 'Billing Frequency',
        value: 'billingFrequency',
        type: 'select',
        options: [
          { label: '', value: '' },
          { label: 'Quarterly', value: 'Quarterly' },
          { label: 'Annually', value: 'Annually' },
          { label: 'Prepay', value: 'Prepay' }
        ]
      },
      {
        label: 'Valid Until Date',
        value: 'validUntilDate',
        type: 'date'
      },
      {
        label: 'Billing Preference',
        value: 'billingPreference'
      },
      {
        label: 'Pricing Date',
        value: 'pricingDate',
        type: 'date'
      }
    ]
  },
  {
    title: 'Details',
    fields: [
      { label: 'Description', value: 'description' },
      {
        label: 'Fulfillment Channel',
        value: 'fulfillmentChannel'
      },
      {
        label: 'Customer Reference',
        value: 'customerReference'
      },
      {
        label: 'Currency',
        value: 'currency',
        type: 'select',
        options: [
          { label: '', value: '' },
          { label: 'Euro', value: 'euro' },
          { label: 'Dollar', value: 'dollar' }
        ]
      },
      {
        label: 'TSA Agreement',
        value: 'tsaAgreement'
      },
      { label: 'Owner', value: 'owner' },
      { label: 'Agreement', value: 'agreement' }
    ]
  },
  {
    title: 'Additional Checks',
    fields: [
      {
        label: 'BPA 2nd Tier Check',
        value: 'bpa2ndTierCheck',
        type: 'switch'
      },
      {
        label: 'Billing History',
        value: 'billingHistory',
        type: 'select',
        options: [
          { label: '', value: '' },
          {
            label: 'Billing History was provided in the last 18 months',
            value: 'Billing'
          },
          {
            label: 'No Billing History was provided in the last 18 months',
            value: 'No Billing'
          }
        ]
      },
      {
        label: 'BPA 2nd Tier Expiry Date',
        value: 'bpa2ndTierExpiryDate'
      },
      {
        label: 'Retroactive Check',
        value: 'retroactiveCheck',
        type: 'switch'
      },
      {
        label: 'Credit Check Expiration Date',
        value: 'creditCheckExpirationDate',
        type: 'date'
      },
      { label: 'Retro Document', value: 'retroDocument' },
      {
        label: 'Credit Check Indicator',
        value: 'creditCheckIndicator',
        type: 'switch'
      },
      {
        label: 'Credit check document',
        value: 'creditCheckDocument'
      },
      {
        label: 'Credit Check Amount',
        value: 'creditCheckAmount'
      },
      {
        label: 'Customer PO Driven',
        value: 'customerPODriven',
        type: 'switch'
      },
      {
        label: 'ERO Exempted',
        value: 'eroExempted'
      },
      {
        label: 'ERO Approval',
        value: 'eroApproval'
      },
      {
        label: 'ERO Document Link',
        value: 'eroDocumentLink'
      }
    ]
  },
  {
    title: 'System Information',
    fields: [
      { label: 'Created By', value: 'createdBy' },
      {
        label: 'Current Configuration Status',
        value: 'currentConfigurationStatus'
      },
      { label: 'Last Modified By', value: 'lastModifiedBy' },
      { label: 'Approval Stage', value: 'approvalStage' },
      {
        label: 'Configuration Finalized Date',
        value: 'configurationFinalizedDate'
      }
    ]
  }
];

const flattenHeaderFields = () =>
  proposalHeaders.map(section => section.fields).flat(1);

export const proposalHeadersMinified = () =>
  flattenHeaderFields().reduce((fields, field) => {
    return {
      ...fields,
      [field.value]: {
        value: field.initialValue,
        error: false,
        message: ''
      }
    };
  }, {});

export const proposalHeadersRequired = () =>
  flattenHeaderFields().reduce((fields, field) => {
    if ('required' in field && field.required) {
      fields.push(field.value);
      return fields;
    }
    return fields;
  }, []);
