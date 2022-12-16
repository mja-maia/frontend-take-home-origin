const size = {
  phone: 576,
  tablet: 768,
  desktop: 992,
  extra: 1200,
} as const;

const mediaQueryKeys = Object.keys(size) as Array<keyof typeof size>;

const mediaQueries = mediaQueryKeys.reduce((acc, cur) => {
  acc[cur] = `(max-width: ${size[cur]}px)`;

  return acc;
}, {} as Record<`${keyof typeof size}`, string>);

export default mediaQueries;
