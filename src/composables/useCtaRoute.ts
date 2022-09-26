import { RouteLabels, Routes } from '@/constants/pages';

export default () => {
  /**
   * Function to return the route associated with the cta label
   * @param {string} label the cta label
   * @returns {string} the route associated with the CTA label
   */
  const mapCtaRoutes = (label: string): string => {
    const route =
      Object.keys(RouteLabels).filter(
        (v) => RouteLabels[v] === label?.toLowerCase()
      )?.[0] || 'Landing';

    return Routes[route];
  };

  return { mapCtaRoutes };
};
