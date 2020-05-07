import { mapToRequestBody, mapToProposalHeaders } from '../ServiceMapper';

describe('service mapper', () => {
  it('map to request body successfully', () => {
    const sampleHeaders = {
      id: 'P-00000001',
      type: 'some type',
      fields: {
        account: {
          value: 'some account',
          error: false,
          message: ''
        }
      }
    };
    const expectedRequestBody = {
      id: '1',
      type: 'some type',
      account: 'some account'
    };
    const body = mapToRequestBody(sampleHeaders);
    expect(body).toEqual(expectedRequestBody);
  });

  it('map to proposal header', () => {
    const sampleResponse = {
      id: '1',
      type: 'some type',
      fields: [
        {
          name: 'account',
          value: 'some account',
          required: 'true',
          options: []
        }
      ]
    };
    const expectedHeaders = {
      id: 'P-00000001',
      type: 'some type',
      fields: {
        account: {
          value: 'some account',
          error: false,
          message: '',
          required: true,
          options: []
        }
      }
    };
    const body = mapToProposalHeaders(sampleResponse);
    expect(body).toEqual(expectedHeaders);
  });
});
