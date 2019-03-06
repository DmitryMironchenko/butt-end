import Twitter from 'twitter-node-client';

const config = {
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  callBackUrl: process.env.TWITTER_CALLBACK_URL,
};

console.log('useTwitter', config);
const twitter = new Twitter.Twitter(config);

const getSearch = async ({ lat = 26.1321457, lng = -80.3063409, q, radius = '5mi', count = 100 } = {}) => (new Promise((resolve, reject) => {
  twitter.getSearch(
    { q, count, geocode: `${lat},${lng},${radius}` },
    e => {
      reject(e);
    },
    data => {
      resolve(data);
    },
  );
}));

export function getNearbyTweets({ lat, lng, q, radius, count }) {
  return getSearch({ lat, lng, q, radius, count });
}