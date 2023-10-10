export const menuSlide = {
  initial: {
    x: "80px",
  },
  animate: (i: number) => ({
    x: 0,
    transition: { duration: 0.8, delay: 0.05 * i, ease: [0.76, 0, 0.24, 1] },
  }),
  exit: (i: number) => ({
    x: "80px",
    transition: { duration: 0.8, delay: 0.05 * i, ease: [0.76, 0, 0.24, 1] },
  }),
};
