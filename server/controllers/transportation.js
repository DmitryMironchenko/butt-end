import fetch from 'node-fetch';

const getData = async ({ lat = 26.1321457, lng = -80.3063409, types = [] } = {}) => {
  if(typeof(types) === 'string') {
    types = [types];
  }
  //console.log('TransportationController.getData', lat, lng, types);

  try {
    // const data = await apiInstance.getETA(37.7884, -122.4076, {});
    const response = await fetch(
      `https://api.lyft.com/v1/drivers?lat=${lat}&lng=${lng}`,
      {
        method: 'GET',
        headers: {
          'cache-control': 'no-cache',
          'content-type': 'application/json',
          authorization: `Bearer gAAAAABZGfiCDp20FbeLXtJqlC_wy8Pp2WjuLVmE3x7eYOxvC_5U3b7GMh36VW_ehYY2ezEuhEM0TXs2_fuu7rxHC5xQEX-SHUp7Q9IAKYYWmBPLz4fxm4z83PkTUTaxCpXv7r3T0-Qp5r-sCyQ7e3Jae9aYhKiTlXqZtvUS4RyUHLLlYyfO1yA=`,
          accept: 'application/json',
        },
      },
    );

    const data = await response.json();
    const processedData = (data.nearby_drivers || [])
      .reduce((acc, curr) => {
        acc.push(...curr.drivers.map(d => ({ ...d.locations[0], ride_type: curr.ride_type })));
        return acc;
      }, [])
      .filter(d => (!types.length || types.indexOf(d.ride_type) > -1));

    //console.log('Lyft data succeeded', processedData);

    return processedData;
  } catch (e) {
    console.log('Lyft data error', e);

    throw new Error('Lyft data error');
  }
};

export function getNearbyDrivers({ lat, lng, types }) {
  return getData({ lat, lng, types });
}