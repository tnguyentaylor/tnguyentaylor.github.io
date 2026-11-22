// MYbloXX Community Refresh — 2026-11-21
// Standalone, conservative PAC rules. Not an official MYXXdev release.
// Returns DIRECT for all non-blocked hosts; blackholes listed ad/tracker domains.
// HTTPS interception is NOT performed; browser/app behavior may vary.
// Hosts may bypass PAC settings. PAC is not a universal ad blocker.
// Review and customize before use.

var MYBLOXX_ALLOW = 'tiktok.com|tiktokcdn.com|tiktokv.com|byteoversea.com|bytedance.com|temu.com|temu.to|kwcdn.com|pinduoduo.com|paypal.com|paypalobjects.com|stripe.com|stripe.network|shopify.com|shopifycdn.com|shop.app|amazon.com|amazonaws.com|amazonpay.com|cloudfront.net|akamaihd.net|akamaized.net|cloudflare.com|hcaptcha.com|recaptcha.net|google.com|gstatic.com|apple.com|icloud.com'.split('|');
var MYBLOXX_BLOCK = '3lift.com|adcolony.com|adform.net|adition.com|adjust.com|adnxs.com|adroll.com|adsafeprotected.com|adservice.google.com|adsrvr.org|adtech.de|adtechus.com|advertising.com|airship.com|amplitude.com|analytics.google.com|app-measurement.com|applovin.com|applvn.com|appnexus.com|appsflyer.com|bidr.io|bidswitch.net|bidtheatre.com|bluekai.com|branch.io|braze.com|bugsnag.com|casalemedia.com|chartbeat.com|chartbeat.net|chartboost.com|clarity.ms|connatix.com|contextweb.com|crazyegg.com|criteo.com|criteo.net|datadoghq.com|demdex.net|dotomi.com|doubleclick.net|everesttech.net|exelator.com|eyeota.net|flurry.com|fullstory.com|fyber.com|google-analytics.com|googleadservices.com|googlesyndication.com|gumgum.com|hotjar.com|indexww.com|inmobi.com|ironSource.com|kargo.com|kochava.com|lijit.com|liveramp.com|lotame.com|mathtag.com|media.net|mgid.com|mixpanel.com|moatads.com|mopub.com|mouseflow.com|newrelic.com|nr-data.net|onclickads.net|onesignal.com|openx.net|optimizely.com|outbrain.com|pagead2.googlesyndication.com|pippio.com|popads.net|popcash.net|propellerads.net|pubmatic.com|quantcast.com|quantserve.com|revcontent.com|rlcdn.com|rubiconproject.com|scorecardresearch.com|securepubads.g.doubleclick.net|seedtag.com|segment.com|segment.io|sentry.io|serving-sys.com|sharethrough.com|singular.net|smaato.net|smartadserver.com|sovrn.com|startappexchange.com|startappservice.com|supersonicads.com|taboola.com|tapad.com|tapjoy.com|teads.tv|triplelift.com|unityads.unity3d.com|urbanairship.com|vungle.com|yieldmo.com'.split('|');
function domainMatch(host, domain) {
  return host === domain || (host.length > domain.length && host.slice(-(domain.length + 1)) === '.' + domain);
}
function FindProxyForURL(url, host) {
  host = (host || '').toLowerCase().replace(/\.$/, '');
  if (!host || isPlainHostName(host) || shExpMatch(host, '*.local')) return 'DIRECT';
  for (var i = 0; i < MYBLOXX_ALLOW.length; i++) {
    if (domainMatch(host, MYBLOXX_ALLOW[i])) return 'DIRECT';
  }
  for (var j = 0; j < MYBLOXX_BLOCK.length; j++) {
    if (domainMatch(host, MYBLOXX_BLOCK[j])) return 'PROXY 127.0.0.1:9';
  }
  return 'DIRECT';
}
