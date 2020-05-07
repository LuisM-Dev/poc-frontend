import { mapToWeb } from '../ServiceMapper';

describe('service mapper', () => {
  it('map to web successfully', () => {
    const sampleResponse = [
      {
        id: '1',
        type: 'some type',
        leadCountry: 'some lead country'
      }
    ];
    const expectedMappedResponse = [
      {
        id: 'P-00000001',
        type: 'some type',
        leadCountry: 'some lead country'
      }
    ];
    const mappedResponse = mapToWeb(sampleResponse);
    expect(mappedResponse).toEqual(expectedMappedResponse);
  });
});
