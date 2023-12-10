import { Image } from 'semantic-ui-react'
import { map } from 'lodash'
import styles from './Gallery.module.css'

export function Gallery(props) {

  const {mosaic} = props

  const mosaicClone = [attributes.mosaic.data.attributes.url]
  const principalImage = mosaicClone.shift()

  return (
    <>
      <div>
        <div>
          <Image src={principalImage.attributes.data.url} /> 
        </div>
      </div>
    </>
  )
}
