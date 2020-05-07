import { mapToRequestBody, mapToWebModel } from '../ServiceMapper';

describe('cart services mapper', () => {
  it('map to request body successfully', () => {
    const expectedBody = {
      proposalId: '1',
      proposalType: 'Some proposal type'
    };
    const requestBody = mapToRequestBody('P-00000001', 'Some proposal type');
    expect(requestBody).toEqual(expectedBody);
  });

  it('map to web model successfully', () => {
    const sampleResponse = [
      { product: 'some product', subLineItems: [{ product: 'some product' }] }
    ];
    const responseModel = mapToWebModel(sampleResponse);
    expect(responseModel[0].id).toBeGreaterThan(0);
    expect(responseModel[0].product).toBe('some product');
    expect(responseModel[0].subRows).toEqual(sampleResponse[0].subLineItems);
  });
});
