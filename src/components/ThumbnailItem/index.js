// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imagesList, onChangeThumbnail, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imagesList
  const activeThumbnailClassName = isActive ? 'image-active-button' : ''

  const onClickThumbnail = () => {
    onChangeThumbnail(id)
  }

  return (
    <li>
      <button
        onClick={onClickThumbnail}
        type="button"
        className={`image-button ${activeThumbnailClassName}`}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}
export default ThumbnailItem
