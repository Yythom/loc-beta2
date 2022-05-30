let proBaseURL = (window as any).getGlobalConfig().url ?? '';

if (proBaseURL.endsWith('/')) {
  proBaseURL = proBaseURL.substr(0, proBaseURL.length - 1);
}

const TIME_OUT = 10000;

const BASE_URL = proBaseURL || 'http://47.108.160.173:9015/';

export { BASE_URL, TIME_OUT };
