const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/personal-portfolio2' : '',
  assetPrefix: isProd ? '/personal-portfolio2/' : '',
  trailingSlash: true,
  images: {
    loader: 'imgix',
    path: '',
  },
};
