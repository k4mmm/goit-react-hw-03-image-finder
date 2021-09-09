import { GalleryImgItem, GalleryImg } from "./ImageGalleryItem.styled";
export const GalleryItem = ({ images, onClick }) => {
  return images.map(({ webformatURL, tags, largeImageURL }) => {
    return (
      <GalleryImgItem key={webformatURL} onClick={() => onClick(largeImageURL)}>
        <GalleryImg src={webformatURL} alt={tags} />
      </GalleryImgItem>
    );
  });
};
