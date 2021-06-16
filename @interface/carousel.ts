export type listImageCarousel = {
  src: string;
  alt?: string;
};

export interface ICarousel {
  leftSlide: number;
  listItem: Array<listImageCarousel>;
  activeIndex: number;
}
