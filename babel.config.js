const hasJsxRuntime = (() => {
  if (process.env.DISABLE_NEW_JSX_TRANSFORM === 'true') {
    return false;
  }

  try {
    require.resolve('react/jsx-runtime');
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
})();

module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: 'last 2 versions',
        },
      ],
      ['@babel/preset-react', { runtime: hasJsxRuntime ? 'automatic' : 'classic' }],
      '@babel/preset-typescript',
    ],
  };
};
