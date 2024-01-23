import { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { Event as EventApi } from '@/api'
import Slider from 'react-slick'
import { NoImage } from '@/components/Layout'
import { Loading } from '@/components/Layout/Loading'
import { map, size } from 'lodash'
import { Image } from 'semantic-ui-react'
import styles from './id.module.css'

const eventCtrl = new EventApi()

export default function eventId() {

  const router = useRouter()

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
      return <Image src={events[index].attributes.gallery.data.attributes.url} />
    }
  }

  return (

    <div className={styles.containerEventId}>
      <div className={styles.iconBack} onClick={() => router.back()}>
        <FaArrowLeft />
        {events ? (
          <h1>{events[0].attributes.title}</h1>
        ) : ('')}
      </div>
      <div className={styles.boxEventId}>

        <>
          {!events ? (
            <Loading />
          ) :
            size(events) === 0 ? (
              <NoImage />
            ) : (
              <div className={styles.containerMainPub}>
                <div className={styles.containerPub}>
                  <Slider {...settings}>

                    <Image src={events[0].attributes.gallery.data[1].attributes.url} />


                  </Slider>
                </div>
              </div>
            )}

        </>

      </div>
    </div>

  )
}
