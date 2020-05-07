import {
  mapToRequestBody,
  mapToWebModel,
  mapToGetRequestBody
} from '../ServiceMapper';

describe('service mapper', () => {
  it('map to request body correctly', () => {
    const sampleAsset = {
      proposal: {
        id: 'P-00000001',
        type: 'some type'
      },
      asset: {
        installedCustomerNumber: {
          value: 'some installed customer number'
        },
        type: {
          value: 'some type'
        },
        model: {
          value: 'some model'
        },
        assetSerialNumber: {
          value: 'some asset serial number'
        }
      }
    };
    const expectedRequestBody = {
      proposalId: '1',
      proposalType: 'some type',
      installedCustomerNumber: 'some installed customer number',
      type: 'some type',
      model: 'some model',
      assetSerialNumber: 'some asset serial number'
    };
    const requestBody = mapToRequestBody(sampleAsset);
    expect(requestBody).toEqual(expectedRequestBody);
  });

  it('map to web model correctly', () => {
    const sampleResponse = [
      {
        installedCustomerNumber: 'some installed customer number',
        type: 'some type',
        model: 'some model',
        assetSerialNumber: 'some asset serial number',
        installDate: 'some install date',
        warrantyEndDate: 'some warranty end date',
        sitePartyId: 'some site party id'
      }
    ];
    const webModel = mapToWebModel(sampleResponse);
    expect(webModel[0].id).toBeTruthy();
  });

  it('map to get request body', () => {
    const sampleAsset = {
      proposal: {
        id: 'P-00000001',
        type: 'some type'
      }
    };
    const expectedGetRequestBody = { proposalId: '1' };
    const getRequestBody = mapToGetRequestBody(sampleAsset);
    expect(getRequestBody).toEqual(expectedGetRequestBody);
  });
});
