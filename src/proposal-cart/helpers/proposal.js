export const proposalsMock = [
  {
    id: 'P-0001',
    opportunity: 'Opportunity 1',
    account: 'Account 1',
    netAmount: '0.00',
    validUntilDate: '10/02/2020',
    stage: 0,
    createdDate: '10/08/2019'
  },
  {
    id: 'P-0002',
    opportunity: 'Opportunity 2',
    account: 'Account 2',
    netAmount: '0.00',
    validUntilDate: '10/02/2020',
    stage: 6,
    createdDate: '10/08/2019'
  },
  {
    id: 'P-0003',
    opportunity: 'Opportunity 3',
    account: 'Account 3',
    netAmount: '0.00',
    validUntilDate: '10/02/2020',
    stage: 3,
    createdDate: '10/08/2019'
  },
  {
    id: 'P-0004',
    opportunity: 'Opportunity 4',
    account: 'Account 4',
    netAmount: '0.00',
    validUntilDate: '10/02/2020',
    stage: 0,
    createdDate: '10/08/2019'
  },
  {
    id: 'P-0005',
    opportunity: 'Opportunity 5',
    account: 'Account 5',
    netAmount: '0.00',
    validUntilDate: '10/02/2020',
    stage: 3,
    createdDate: '10/08/2019'
  },
  {
    id: 'P-0006',
    opportunity: 'Opportunity 6',
    account: 'Account 6',
    netAmount: '0.00',
    validUntilDate: '10/02/2020',
    stage: 6,
    createdDate: '10/08/2019'
  },
  {
    id: 'P-0007',
    opportunity: 'Opportunity 7',
    account: 'Account 7',
    netAmount: '0.00',
    validUntilDate: '10/02/2020',
    stage: 0,
    createdDate: '10/08/2019'
  },
  {
    id: 'P-0008',
    opportunity: 'Opportunity 8',
    account: 'Account 8',
    netAmount: '0.00',
    validUntilDate: '10/02/2020',
    stage: 0,
    createdDate: '10/08/2019'
  },
  {
    id: 'P-0009',
    opportunity: 'Opportunity 9',
    account: 'Account 9',
    netAmount: '0.00',
    validUntilDate: '10/02/2020',
    stage: 0,
    createdDate: '10/08/2019'
  },
  {
    id: 'P-0010',
    opportunity: 'Opportunity 10',
    account: 'Account 10',
    netAmount: '0.00',
    validUntilDate: '10/02/2020',
    stage: 6,
    createdDate: '10/08/2019'
  }
];

export const assetsMock = [
  {
    id: 'A-01',
    assetSerialNumber: '95633AB',
    installDate: '2019-09-20',
    installedCustomerNumber: '745687',
    model: 'H6S',
    sitePartyId: 'S026358760',
    type: '3580',
    warrantyEndDate: '2022-09-20'
  },
  {
    id: 'A-02',
    assetSerialNumber: '95633AB',
    installDate: '2019-09-20',
    installedCustomerNumber: '45687',
    model: 'H6S',
    sitePartyId: 'S026358760',
    type: '3580',
    warrantyEndDate: '2022-09-20'
  },
  {
    id: 'A-03',
    assetSerialNumber: '95633AB',
    installDate: '2019-09-20',
    installedCustomerNumber: '7987687',
    model: 'H6S',
    sitePartyId: 'S026358760',
    type: '3580',
    warrantyEndDate: '2022-09-20'
  },
  {
    id: 'A-04',
    assetSerialNumber: '95633AB',
    installDate: '2019-09-20',
    installedCustomerNumber: '345463',
    model: 'H6S',
    sitePartyId: 'S026358760',
    type: '3580',
    warrantyEndDate: '2022-09-20'
  },
  {
    id: 'A-05',
    assetSerialNumber: '95633AB',
    installDate: '2019-09-20',
    installedCustomerNumber: '35657',
    model: 'H6S',
    sitePartyId: 'S026358760',
    type: '3580',
    warrantyEndDate: '2022-09-20'
  }
];

export const productsMock = {
  cartId: '1234567',
  country: 'AT',
  quoteId: 'a1M2f000000I0q6EAC',
  lineItems: [
    {
      installAt: '677778',
      installAtSite: 'S027981386',
      transactionType: 'Add',
      servicePid: '6948-D08',
      serviceName: 'WSU Storage',
      features: [
        {
          feature: 'W2CB',
          description: '2h Committed Contact,full shift'
        }
      ],
      allowedFeatures: [
        {
          feature: 'WU24',
          description: 'On-site Repair,ORT=SBD,full shift'
        },
        {
          feature: 'W2CB',
          description: '2h Committed Contact,full shift'
        },
        {
          feature: 'W4OS',
          description: '4h Committed On-site,full shift'
        },
        {
          feature: 'W24F',
          description: '24h Committed Fix,full shift'
        },
        {
          feature: 'W12F',
          description: '12h Committed Fix,full shift'
        },
        {
          feature: 'W08F',
          description: '8h Committed Fix,full shift'
        },
        {
          feature: 'W06F',
          description: '6h Committed Fix,full shift'
        }
      ],
      mandatoryService: false,
      serviceStartDate: '2019-11-11',
      serviceEndDate: '2019-11-11',
      serviceStartDateModifiable: false,
      serviceEndDateModifiable: false,
      minServiceStartDate: '2019-11-11',
      maxServiceEndDate: '2019-11-11',
      linkedToPrevious: false,
      chargeType: 'OTC',
      pricingGroup: 'WSU-Storage',
      priceReferenceDate: '2019-11-11',
      annualListPrice: 1025.06005859375,
      unitCost: 0,
      offeringGroupOrder: 'A',
      sowPrintGroup: 'TSA',
      platform: 'Storage',
      hardware: {
        productId: '3580-H6S',
        description: 'System Storage TS2260 Tape Drive Model H6S',
        serial: '95633AB',
        installDate: '2019-11-11',
        warrantyEndDate: '2019-11-11',
        lastUpdate: '2019-11-12T12:08:54.437511692'
      },
      displayOutput: {
        lineName: 'WSU Storage',
        referenceAssetId: '3580-H6S',
        serial: '95633AB',
        referenceAssetDescription: 'System Storage TS2260 Tape Drive Model H6S',
        quantity: 1,
        serviceLevel: 'W2CB',
        warrantyEndDate: '2019-11-11'
      },
      messages: [
        {
          messageLevel: 'ERROR',
          messageText:
            "Features-API: No hardware configuration found in LMS - used mock for model 'H6S' (no hardware features mocked)"
        }
      ]
    },
    {
      installAt: '677778',
      installAtSite: 'S027981386',
      transactionType: 'Add',
      servicePid: '6948-C97',
      serviceName: 'Basic maintenance Storage',
      features: [
        {
          feature: 'M2CB',
          description: '2h Committed Contact,full shift'
        }
      ],
      allowedFeatures: [
        {
          feature: 'TMND',
          description: 'On-site Repair,ORT=NBD,prime shift '
        },
        {
          feature: 'TMY5',
          description: 'On-site Repair,ORT=SBD, prime shift'
        },
        {
          feature: 'TMY7',
          description: 'On-site Repair,ORT=SBD,full shift'
        },
        {
          feature: 'M2CB',
          description: '2h Committed Contact,full shift'
        },
        {
          feature: 'M4OS',
          description: '4h Committed On-site,full shift'
        },
        {
          feature: 'M24F',
          description: '24h Committed Fix,full shift'
        },
        {
          feature: 'M12F',
          description: '12h Committed Fix,full shift'
        },
        {
          feature: 'M08F',
          description: '8h Committed Fix,full shift'
        },
        {
          feature: 'M06F',
          description: '6h Committed Fix,full shift'
        }
      ],
      mandatoryService: false,
      serviceStartDate: '2019-11-12',
      serviceEndDate: '2029-11-11',
      serviceStartDateModifiable: false,
      serviceEndDateModifiable: true,
      minServiceStartDate: '2019-11-12',
      maxServiceEndDate: '2029-11-11',
      linkedToPrevious: false,
      chargeType: 'Recurring',
      pricingGroup: 'HWMA-Storage',
      priceReferenceDate: '2019-11-11',
      offeringGroupOrder: 'B',
      sowPrintGroup: 'TSA',
      platform: 'Storage',
      hardware: {
        productId: '3580-H6S',
        description: 'System Storage TS2260 Tape Drive Model H6S',
        serial: '95633AB',
        installDate: '2019-11-11',
        warrantyEndDate: '2019-11-11',
        lastUpdate: '2019-11-12T12:08:54.437511692'
      },
      subLineItems: [
        {
          subLineItemType: 'Model',
          installAt: '677778',
          installAtSite: 'S027981386',
          quantity: 1,
          serviceStartDate: '2019-11-12',
          serviceEndDate: '2029-11-11',
          annualListPrice: 1125.719970703125,
          unitCost: 0,
          hardware: {
            type: '3580',
            model: 'H6S',
            productDescription: 'System Storage TS2260 Tape Drive Model H6S',
            installDate: '2019-11-11',
            warrantyEndDate: '2019-11-11',
            serial: '95633AB',
            lastUpdate: '2019-11-12T12:08:54.437511692'
          },
          displayOutput: {
            lineName: 'Model',
            referenceAssetId: '3580-H6S',
            referenceAssetDescription:
              'System Storage TS2260 Tape Drive Model H6S',
            quantity: 1,
            warrantyEndDate: '2019-11-11'
          }
        }
      ],
      displayOutput: {
        lineName: 'Basic maintenance Storage',
        referenceAssetId: '3580-H6S',
        serial: '95633AB',
        referenceAssetDescription: 'System Storage TS2260 Tape Drive Model H6S',
        quantity: 1,
        serviceLevel: 'M2CB',
        warrantyEndDate: '2019-11-11'
      },
      messages: [
        {
          messageLevel: 'ERROR',
          messageText:
            "Features-API: No hardware configuration found in LMS - used mock for model 'H6S' (no hardware features mocked)"
        }
      ]
    },
    {
      installAt: '677778',
      installAtSite: 'S027981386',
      transactionType: 'Add',
      servicePid: '6948-E37',
      serviceName: 'GTMS analysis & update Storage',
      features: [
        {
          feature: 'TGBA',
          description: 'TMS, 2 Analyses per Year'
        }
      ],
      allowedFeatures: [
        {
          feature: 'TGAA',
          description: 'TMS, 1 Analysis per Year'
        },
        {
          feature: 'TGBA',
          description: 'TMS, 2 Analyses per Year'
        },
        {
          feature: 'TGEA',
          description: 'TMS, 1 Analysis & Upd per Year'
        },
        {
          feature: 'TGFA',
          description: 'TMS, 2 Analyses & Upd per Year'
        }
      ],
      mandatoryService: false,
      serviceStartDate: '2019-11-11',
      serviceEndDate: '2029-11-11',
      serviceStartDateModifiable: true,
      serviceEndDateModifiable: true,
      minServiceStartDate: '2019-11-11',
      maxServiceEndDate: '2029-11-11',
      prerequisiteProductId: '6948-C97',
      linkedToPrevious: false,
      chargeType: 'Recurring',
      pricingGroup: 'GTMS-Storage',
      priceReferenceDate: '2019-11-11',
      annualListPrice: 332,
      unitCost: 0,
      offeringGroupOrder: 'C',
      sowPrintGroup: 'TSA',
      platform: 'Storage',
      hardware: {
        productId: '3580-H6S',
        description: 'System Storage TS2260 Tape Drive Model H6S',
        serial: '95633AB',
        installDate: '2019-11-11',
        warrantyEndDate: '2019-11-11',
        lastUpdate: '2019-11-12T12:08:54.437511692'
      },
      displayOutput: {
        lineName: 'GTMS analysis & update Storage',
        referenceAssetId: '3580-H6S',
        serial: '95633AB',
        referenceAssetDescription: 'System Storage TS2260 Tape Drive Model H6S',
        quantity: 1,
        serviceLevel: 'TGBA',
        warrantyEndDate: '2019-11-11'
      }
    }
  ],
  messages: [
    {
      messageLevel: 'WARNING',
      messageText:
        "LMS-API: No software found (type = '3580', serial = '95633AB')"
    },
    {
      messageLevel: 'ERROR',
      messageText:
        "LMS-API: No hardware configuration found (type = '3580', serial = '95633AB')"
    },
    {
      messageLevel: 'ERROR',
      messageText:
        "MDH / Threshold: Error getting threshold (thresholdTypeCd = 'BP_EXHIBITS', offeringId = '6948-C97', machineTypeCd = 'null', machineModelCd = 'null', fulfillmentChannelInd = 'string') - HTTP 500 Internal Server Error"
    },
    {
      messageLevel: 'WARNING',
      messageText:
        "MDH / Threshold: No threshold (thresholdTypeCd = 'BP_EXHIBITS', offeringId = '6948-C97', machineTypeCd = 'null', machineModelCd = 'null', fulfillmentChannelInd = 'string')"
    },
    {
      messageLevel: 'ERROR',
      messageText:
        "MDH / Threshold: Error getting threshold (thresholdTypeCd = 'BP_EXHIBITS', offeringId = '6942-87W', machineTypeCd = 'null', machineModelCd = 'null', fulfillmentChannelInd = 'string') - HTTP 500 Internal Server Error"
    },
    {
      messageLevel: 'WARNING',
      messageText:
        "MDH / Threshold: No threshold (thresholdTypeCd = 'BP_EXHIBITS', offeringId = '6942-87W', machineTypeCd = 'null', machineModelCd = 'null', fulfillmentChannelInd = 'string')"
    },
    {
      messageLevel: 'ERROR',
      messageText:
        "MDH / Threshold: Error getting threshold (thresholdTypeCd = 'BP_EXHIBITS', offeringId = '6948-E37', machineTypeCd = 'null', machineModelCd = 'null', fulfillmentChannelInd = 'string') - HTTP 500 Internal Server Error"
    },
    {
      messageLevel: 'WARNING',
      messageText:
        "MDH / Threshold: No threshold (thresholdTypeCd = 'BP_EXHIBITS', offeringId = '6948-E37', machineTypeCd = 'null', machineModelCd = 'null', fulfillmentChannelInd = 'string')"
    },
    {
      messageLevel: 'ERROR',
      messageText:
        "MDH / Threshold: Error getting threshold (thresholdTypeCd = 'BP_EXHIBITS', offeringId = '6948-D08', machineTypeCd = 'null', machineModelCd = 'null', fulfillmentChannelInd = 'string') - HTTP 500 Internal Server Error"
    },
    {
      messageLevel: 'WARNING',
      messageText:
        "MDH / Threshold: No threshold (thresholdTypeCd = 'BP_EXHIBITS', offeringId = '6948-D08', machineTypeCd = 'null', machineModelCd = 'null', fulfillmentChannelInd = 'string')"
    },
    {
      messageLevel: 'ERROR',
      messageText:
        "MDH / Threshold: Error getting threshold (thresholdTypeCd = 'BP_EXHIBITS', offeringId = '6942-13Z', machineTypeCd = 'null', machineModelCd = 'null', fulfillmentChannelInd = 'string') - HTTP 500 Internal Server Error"
    },
    {
      messageLevel: 'WARNING',
      messageText:
        "MDH / Threshold: No threshold (thresholdTypeCd = 'BP_EXHIBITS', offeringId = '6942-13Z', machineTypeCd = 'null', machineModelCd = 'null', fulfillmentChannelInd = 'string')"
    },
    {
      messageLevel: 'INFO',
      messageText:
        "Service '6942-87W' is not eligible (HW 3580-H6S / 95633AB, location 677778) - No price for any modifiable service feature"
    },
    {
      messageLevel: 'INFO',
      messageText:
        "Service '6942-13Z' is not eligible (HW 3580-H6S / 95633AB, location 677778) - Gap duration from 2019-11-12 to 2019-11-12 (0 months) is less than minimum gap period (3 months)"
    },
    {
      messageLevel: 'INFO',
      messageText: 'Get Services took 9,505 ms (eligible 3 from 5 middleware)'
    }
  ],
  externalCalls: [
    {
      service: 'LMS-API SW',
      totalDuration: 1184,
      serviceCall: {
        lmsSoftwareDurations: [1182]
      },
      totalCallsDuration: 1182,
      totalCallCount: 1
    },
    {
      service: 'LMS-API HW',
      totalDuration: 293,
      serviceCall: {
        lmsFeatureDurations: [291]
      },
      totalCallsDuration: 291,
      totalCallCount: 1
    },
    {
      service: 'QuoteHub-API',
      totalDuration: 7717,
      serviceCall: {
        listPriceDurations: [2649, 81, 2783, 114],
        hierarchyDurations: [32, 101, 108, 149, 150, 170],
        featureDurations: [70, 115, 106, 131, 169, 192],
        featureMappingDurations: [116],
        thresholdDurations: [337, 350, 321, 312, 178],
        availabilityDurations: [2615, 125, 131, 97, 102, 122],
        productMappingDurations: [107]
      },
      totalCallsDuration: 12033,
      totalCallCount: 29
    },
    {
      service: 'ContractEntitlement-API',
      totalDuration: 205,
      serviceCall: {
        entitlementDurations: [203]
      },
      totalCallsDuration: 203,
      totalCallCount: 1
    },
    {
      service: 'GetServices',
      totalDuration: 9505
    }
  ]
};
