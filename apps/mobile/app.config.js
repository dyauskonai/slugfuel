module.exports = {
  expo: {
    name: 'SlugFuel', slug: 'slugfuel', version: '1.0.0',
    platforms: ['android'], orientation: 'portrait', userInterfaceStyle: 'light',
    android: { package: 'com.dyauskonai.slugfuel', allowBackup: false },
    plugins: ['./plugins/withLocalApi'],
  },
};
