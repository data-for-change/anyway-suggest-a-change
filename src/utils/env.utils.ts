export const isProd = import.meta.env.VITE_ENV === 'production';

// temporary helpers for features flags.
// once feature is production ready - method and env var can be deleted
export const FEATURE_FLAGS = {
  login: !isProd || import.meta.env.VITE_LOGIN_READY_FOR_PROD === 'true',
  location_search: !isProd || import.meta.env.VITE_LOCATION_SEARCH_READY_FOR_PROD === 'true',
  language: !isProd || import.meta.env.VITE_LANGUAGE_READY_FOR_PROD === 'true',
};
