/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ec0de1fdc556a7e78477723037ce9581"
  },
  {
    "url": "assets/css/0.styles.d1ace3c6.css",
    "revision": "5cccd062dd56c3d84d238b8bb5a93bf4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.41c60884.js",
    "revision": "1100e1e80734f80fe1434704c5f81861"
  },
  {
    "url": "assets/js/11.1e31a3db.js",
    "revision": "0feb2fe9df5553d5423ecb747ad7c172"
  },
  {
    "url": "assets/js/12.72fea953.js",
    "revision": "952cb455a14ba9b084b3be3d81e42e02"
  },
  {
    "url": "assets/js/13.935b29cc.js",
    "revision": "05272f2c07ede5c07ec11e945f0f6f4b"
  },
  {
    "url": "assets/js/14.b14d6ea0.js",
    "revision": "53d0131725b88c4ba22f5b9e750ca383"
  },
  {
    "url": "assets/js/15.cf6894a6.js",
    "revision": "a957ab491b9959773baa6fa07cce6a35"
  },
  {
    "url": "assets/js/16.17c56ea8.js",
    "revision": "0d29f3f460a163d9ea7f34c224e6ce04"
  },
  {
    "url": "assets/js/17.6166684c.js",
    "revision": "4843df53b617726bcdda313a510a410d"
  },
  {
    "url": "assets/js/18.beed4f5f.js",
    "revision": "f16a7e4664b441ecfa5aa5ec70195bc4"
  },
  {
    "url": "assets/js/19.c6a2dd59.js",
    "revision": "92851b8f597ec6a034f4c6a8366571b5"
  },
  {
    "url": "assets/js/2.d874648d.js",
    "revision": "8f0eea0fe97531e64e50c987d3c857fe"
  },
  {
    "url": "assets/js/20.f4df2e15.js",
    "revision": "f51a719b5dbf786c43374e535c7bda24"
  },
  {
    "url": "assets/js/21.fa6fd9b8.js",
    "revision": "9c46403abb0856793eef7868c2c8f804"
  },
  {
    "url": "assets/js/22.47bb5d56.js",
    "revision": "6bcb110ea1b49ddb4965cbe6dadf4ed6"
  },
  {
    "url": "assets/js/23.1759d8e9.js",
    "revision": "9e6d49b61207d886278dc30bcc8973ad"
  },
  {
    "url": "assets/js/24.2db96fd1.js",
    "revision": "d80bf63232749c171c29b25a3afcdedb"
  },
  {
    "url": "assets/js/25.7382d18a.js",
    "revision": "7daba58df4e5d9b65724823636f77471"
  },
  {
    "url": "assets/js/26.56278487.js",
    "revision": "5a5a2fa9bd3442aea345477af57e37ae"
  },
  {
    "url": "assets/js/3.ea75f214.js",
    "revision": "20ee0ed44eb21d70506dc134d73fac4c"
  },
  {
    "url": "assets/js/4.9c9bfe33.js",
    "revision": "84b9a74ff02084c0d2ff6b99b295cc5c"
  },
  {
    "url": "assets/js/5.a6c68754.js",
    "revision": "81dd3f676d8bea0fe6f8578a096fc319"
  },
  {
    "url": "assets/js/6.fc5642e0.js",
    "revision": "94d02ca2f6f86a0b196e0a3fc3d83df5"
  },
  {
    "url": "assets/js/7.91802edd.js",
    "revision": "21608b450192a61bd2f0af039db74694"
  },
  {
    "url": "assets/js/8.5d069f14.js",
    "revision": "99b37537b4f04d5c82d46b85847ddc3c"
  },
  {
    "url": "assets/js/9.75eddf3f.js",
    "revision": "9e37d59ebf96965496bdabdd3168ab31"
  },
  {
    "url": "assets/js/app.4ff6a5f4.js",
    "revision": "a6d6c4018beea3e475b5f370d402dfcc"
  },
  {
    "url": "graylog/index.html",
    "revision": "3a4630e277e3d48de6ed8f5f020437cd"
  },
  {
    "url": "img/books.png",
    "revision": "b81b1b341f147ea86ca39c01a82eef58"
  },
  {
    "url": "img/centos.png",
    "revision": "eceb88fbdcfbb06c8ddcdcdbc0d9feb4"
  },
  {
    "url": "img/icons/1200x627.png",
    "revision": "4ed965ba2daf1f2907b5696f47949426"
  },
  {
    "url": "img/icons/1280x640.png",
    "revision": "2f2b95eb6ef52574bd86b1e426be9df9"
  },
  {
    "url": "img/icons/144x144.png",
    "revision": "c5abed2721558a98cd5adb1b28d5f032"
  },
  {
    "url": "img/icons/1500x500.png",
    "revision": "cb77b3aa40b6fbdd9a25ecb8fed580d3"
  },
  {
    "url": "img/icons/192x192.png",
    "revision": "b8853a3b71b3a7e79c116d8d2dc8fe99"
  },
  {
    "url": "img/icons/256x256.png",
    "revision": "64014871dd4b25592423d91c4a007f3a"
  },
  {
    "url": "img/icons/384x384.png",
    "revision": "f5837cc63fdd26d96461a55d61fb1944"
  },
  {
    "url": "img/icons/4096x4096.png",
    "revision": "9e79bb6db785b2243380efb2546cf841"
  },
  {
    "url": "img/icons/48x48.png",
    "revision": "c1077dc498ae97b7f5209da9277579e3"
  },
  {
    "url": "img/icons/512x512.png",
    "revision": "0a91e0a9adeee05b4a0feeadd06574dd"
  },
  {
    "url": "img/icons/72x72.png",
    "revision": "b36cd3c87f00f07092b6442b7e00b0a6"
  },
  {
    "url": "img/icons/96x96.png",
    "revision": "2907ea3e33e14a352ba8d282e0f32cd5"
  },
  {
    "url": "img/icons/video.png",
    "revision": "458a3a6e4546bb82373acf69b6f582e8"
  },
  {
    "url": "img/mmonit/mmonit_login.png",
    "revision": "641393a187791235fbee600f71e48b7a"
  },
  {
    "url": "img/mmonit/mmonit1.png",
    "revision": "1665c0ebb4ce463c59df456bda2e5ee5"
  },
  {
    "url": "img/mmonit/slack_alert.png",
    "revision": "239fd5c0b726b06c6cc555a908d08359"
  },
  {
    "url": "img/mmonit/slack_incoming_webhook.png",
    "revision": "74af9ccf2af674a14e7d454817a89ded"
  },
  {
    "url": "img/network.png",
    "revision": "b7599cc93fd5862f7d7b95c1014e2d32"
  },
  {
    "url": "img/openvas/gce_success.png",
    "revision": "68690af56e0a7e30759701936d306f0b"
  },
  {
    "url": "img/openvas/gsa_auth_target.png",
    "revision": "24526d2baf1cc29af4aa4d72d3b646c2"
  },
  {
    "url": "img/openvas/gsa_auth_task.png",
    "revision": "fd7ed294fba694fdc494a9b496118af3"
  },
  {
    "url": "img/openvas/gsa_credentials.png",
    "revision": "2b167ef41f7c628b88016c5410bae93e"
  },
  {
    "url": "img/openvas/gsa_dashboard.png",
    "revision": "62a7cddd490798fa7338f0709aa6deef"
  },
  {
    "url": "img/openvas/gsa_login.png",
    "revision": "c41707e31268ccf0b9450eb95acd3494"
  },
  {
    "url": "img/openvas/gsa_newcredentials.png",
    "revision": "9d5bb41889cddfca6c246eb5dff70b3e"
  },
  {
    "url": "img/openvas/gsa_noauth_scan.png",
    "revision": "6ca50842204bbaae21d1722a8ad22cf7"
  },
  {
    "url": "img/openvas/gsa_noauth_task.png",
    "revision": "fd779e1ba6466b852863936c0bbc4527"
  },
  {
    "url": "img/openvas/gsa_target_auth.png",
    "revision": "9a602b0a9cf7ce2ecd67ebd2f5fa59fd"
  },
  {
    "url": "img/openvas/gsa_target.png",
    "revision": "2a69f5dd7c68a9f5f1fab0d59bfcc60b"
  },
  {
    "url": "img/openvas/gsa_targets.png",
    "revision": "7a3ebf39135e960ee4cc8eae1554eb1d"
  },
  {
    "url": "img/openvas/gsa_task.png",
    "revision": "5843f298967649c9d3eaf8302099b621"
  },
  {
    "url": "img/openvas/gsa_tasks.png",
    "revision": "578e858b776d0a23609524bf76cf86f6"
  },
  {
    "url": "img/openvas/vm_settings.png",
    "revision": "b9ac5625eb085a07362fc0c0a596c483"
  },
  {
    "url": "img/ossec/512x512.png",
    "revision": "bee855a078b5cf7941dcc4c2838ddf1d"
  },
  {
    "url": "img/ossec/cloudflare_token.png",
    "revision": "c36576440c64fceb89e53cf4f8dd1921"
  },
  {
    "url": "img/ossec/remote_syslog_settings.png",
    "revision": "29e56b2348c0689d577022cc7c799d6e"
  },
  {
    "url": "img/ossec/remote_syslog_value.png",
    "revision": "213cebc9172c9a1f8f8a3a011dfd9a95"
  },
  {
    "url": "img/ossec/windows_agent_complete.png",
    "revision": "8a5f36cb5a5469e42530fcb44543b045"
  },
  {
    "url": "img/ossec/windows_agent_components.png",
    "revision": "15d8bf841dbdce26c04ca09b48538dcf"
  },
  {
    "url": "img/ossec/windows_agent_manager.png",
    "revision": "095dfcef88dff43ea831b872ccd87898"
  },
  {
    "url": "img/ossec/windows_agent_setup.png",
    "revision": "3781048e9d3c81ec993f3cb08cacaa22"
  },
  {
    "url": "img/privacyidea/privacyidea_login.png",
    "revision": "807fcb9651a316aa89188daee7c120cc"
  },
  {
    "url": "img/ubuntu.png",
    "revision": "f53554b67ad3f94dfb78b2dbcd6630d3"
  },
  {
    "url": "img/win98/canopus.jpg",
    "revision": "713f202c27170220c11ed8dd8d8c1258"
  },
  {
    "url": "img/win98/harddrive.jpg",
    "revision": "a315cb29db3876a2105cc4cd2a3e25e9"
  },
  {
    "url": "img/win98/livedrive.jpg",
    "revision": "0fe14c326242e1d82bed8efb7f0725e3"
  },
  {
    "url": "img/win98/memory.jpg",
    "revision": "01314af32ed413b62944e236664cef20"
  },
  {
    "url": "img/win98/motherboard.jpg",
    "revision": "b0d4ebf37a37d9013ddb6ae1503b22dc"
  },
  {
    "url": "img/win98/newq.jpg",
    "revision": "081147848fc2d1e5202e545d544e07fd"
  },
  {
    "url": "img/win98/pcdvd.jpg",
    "revision": "c4e05a218ebaab64750da9fd4ef9ee73"
  },
  {
    "url": "img/win98/processor.jpg",
    "revision": "bb1250126cc6b2a90f944bde2ebb7d7e"
  },
  {
    "url": "img/win98/psu.jpg",
    "revision": "d5907d3d9e55849f9186daaaaa0964b2"
  },
  {
    "url": "img/win98/soundblaster.jpg",
    "revision": "dab0ec6f7aadd338ef4628e67dae025e"
  },
  {
    "url": "img/win98/voodoo2.jpg",
    "revision": "6d957763e3279acf4608a680f21068a8"
  },
  {
    "url": "img/win98/voodoo2fan.jpg",
    "revision": "2b9e1dc0054358c95026b7b7816a70b1"
  },
  {
    "url": "index.html",
    "revision": "146e4f673205bbf0cff0028114e88f3d"
  },
  {
    "url": "intrusion/index.html",
    "revision": "d2e956822535629106a5ddf38ef1ba82"
  },
  {
    "url": "jira/index.html",
    "revision": "3f4c5d89fbd6a8e93c35cbd3a171b786"
  },
  {
    "url": "ldap/index.html",
    "revision": "05f8c6cb0eeb70f7e03c48dab6e6740a"
  },
  {
    "url": "mmonit/index.html",
    "revision": "954cb4e45c7c05fe4322a94c442085f7"
  },
  {
    "url": "openvas/index.html",
    "revision": "c6e69ca0df3eb866bee63c9b8ae9c8c8"
  },
  {
    "url": "ossec/index.html",
    "revision": "4158c08e0c51291fa623658254055876"
  },
  {
    "url": "pcp/index.html",
    "revision": "4d7193cc403a4e2c2ec0332793a168ee"
  },
  {
    "url": "privacyidea/index.html",
    "revision": "9eed73723f9b4d41bb3d894fcd06a3c5"
  },
  {
    "url": "psad/index.html",
    "revision": "e3699e4e092b817a7ad9dbb9244fc868"
  },
  {
    "url": "radius/index.html",
    "revision": "f61c31dbb9ffc0c58793a31e1542c20e"
  },
  {
    "url": "rsyslog/index.html",
    "revision": "987d9e23f444807fd891d3c51f7d0225"
  },
  {
    "url": "tags.html",
    "revision": "235ab695a28f2262b6dec1466fc24477"
  },
  {
    "url": "u2f/index.html",
    "revision": "f0fd412a40ccdf88dc99d0840345a383"
  },
  {
    "url": "wireguard/index.html",
    "revision": "dabcfd07c18f5785e45555fe1a2f48d1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
