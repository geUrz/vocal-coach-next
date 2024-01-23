import { useEffect, useState } from 'react'
import { Image } from 'semantic-ui-react'
import { FaTimes } from 'react-icons/fa'
import Slider from 'react-slick'
import { map } from 'lodash'
import styles from './SlideImage.module.css'
import { Event } from '@/api'

const eventCtrl = new Event()

export function SlideImage(props) {

  const { onOpenCloseImg } = props

  const [events, setEvents] = useState(null) 

  console.log(events)

  useEffect(() => {
    (async () => {
      try {
        const response = await eventCtrl.getOne()
        setEvents(response.data)
      } catch (error) {
          console.error(error)
      }
    })()
  }, [])

  const settings = {
    dots: true,
    dotsClass: styles.dots,
    infinite: true,
    slidersToShow: 1,
    slidersToScroll: 1,
    arrows: false,
    customPaging: function (index) {
      return <Image src={events[index].attributes.image.data.attributes.url} />
    } 
  }

  return (
    <>
      <div className={styles.iconClose} onClick={onOpenCloseImg}>
        <FaTimes />
      </div>
      <div className={styles.containerMainPub}>
        <div className={styles.containerPub}>
          <Slider {...settings}>
            {map(events, (ev) => (
              <div key={ev.id}>
                <Image src={ev.attributes.image.data.attributes.url} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}
