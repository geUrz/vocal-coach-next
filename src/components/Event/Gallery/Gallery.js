import { Image } from 'semantic-ui-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import styles from './Gallery.module.css'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

export function Gallery(props) {

  const { onOpenClose } = props

  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (

    <div>
      <div className={styles.boxClose} onClick={onOpenClose}>
        <FaTimes />
      </div>
      <div className={styles.slide}>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          spaceBetween={50}
          navigation={false}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <Image src="img/ev1/ev1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="img/ev1/ev2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="img/ev1/ev3.jpg" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image src="img/ev1/ev1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="img/ev1/ev2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="img/ev1/ev3.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

  )
}
