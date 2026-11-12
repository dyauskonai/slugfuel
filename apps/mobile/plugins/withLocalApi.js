const { withAndroidManifest, withDangerousMod } = require('expo/config-plugins');
const fs = require('node:fs');
const path = require('node:path');
module.exports = config => {
  config = withAndroidManifest(config, config => {
    const application = config.modResults.manifest.application[0];
    application.$['android:networkSecurityConfig'] = '@xml/network_security_config';
    return config;
  });
  return withDangerousMod(config, ['android', async config => {
    const folder = path.join(config.modRequest.platformProjectRoot, 'app/src/main/res/xml');
    fs.mkdirSync(folder, { recursive: true });
    // HTTP only for the developer's loopback service; remote backends require HTTPS.
    fs.writeFileSync(path.join(folder, 'network_security_config.xml'), `<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
  <base-config cleartextTrafficPermitted="false" />
  <domain-config cleartextTrafficPermitted="true">
    <domain>localhost</domain><domain>127.0.0.1</domain><domain>10.0.2.2</domain>
  </domain-config>
</network-security-config>`);
    return config;
  }]);
};
