import { GA_TRACKING_ID } from 'constants/lib';

export const pageView = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_location: url,
  });
}

export const event = ({ action, params }) => {
  window.gtag('event', action, ...params);
}