const protocol = process.env.HTTPS?.trim() === 'true' ? 'https' : 'http';

module.exports = {
  port: 3000,
  protocol,
  devServer: `${protocol}://localhost`,
  jestDirectory: 'jest',
  rootDirectory: 'src',
  publicDirectory: 'public',
  outputDirectory: 'dist',
  environmentsDirectory: 'environments',
  jsSubDirectory: 'js/',
  cssSubDirectory: 'css/',
  isCssModules: false,
  metaInfo: {
    //max 60 (recommended)
    title: 'React language router',
    //max 150 (recommended)
    description: 'description',
    url: 'https://example.com',
    keywords: 'add you keywords',
  },
};
