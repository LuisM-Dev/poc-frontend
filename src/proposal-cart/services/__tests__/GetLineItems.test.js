import axios from 'axios';
import getLineItems from '../GetLineItems';
import * as serviceMapper from '../ServiceMapper';

jest.mock('axios');

describe('get line items', () => {
  const sampleAsset = { proposal: { id: 'P-00000001', type: 'some type' } };
  const sampleRequestBody = { proposalId: '1', proposalType: 'some type' };

  it('get line items correctly', async () => {
    const responseMock = { data: [{ field: 'some field' }] };
    const expectedGetLineItems = [{ id: 'some id' }];
    const sampleWebModel = [{ id: 'some id' }];
    jest
      .spyOn(serviceMapper, 'mapToRequestBody')
      .mockReturnValue(sampleRequestBody);
    jest.spyOn(serviceMapper, 'mapToWebModel').mockReturnValue(sampleWebModel);
    axios.post.mockResolvedValue(responseMock);
    const asset = await getLineItems(sampleAsset);
    expect(asset).toEqual(expectedGetLineItems);
  });

  it('get line items returns error', async () => {
    const responseMock = {
      response: { data: { errors: { error: 'error message' } } }
    };
    const expectedGetAsset = { error: 'error message' };
    jest
      .spyOn(serviceMapper, 'mapToRequestBody')
      .mockReturnValue(sampleRequestBody);
    axios.post.mockRejectedValue(responseMock);
    const asset = await getLineItems(sampleAsset);
    expect(asset).toEqual(expectedGetAsset);
  });
});
