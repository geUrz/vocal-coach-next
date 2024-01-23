import { useEffect, useState } from "react"
import { map, size } from "lodash"
import { Nosotros as nosotrosApi } from '@/api'
import { Loading } from "@/components/Layout/Loading"
import { Image } from "semantic-ui-react"
import Slider from "react-slick"
import styles from './ListaPub.module.css'


const ctrlNosotros = new nosotrosApi()

export function ListaPub() {

  const [nosotros, setNosotros] = useState(null) 

  useEffect(() => {
    (async() => {
      try {
        const response = await ctrlNosotros.getAll()
        setNosotros(response.data)
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
      return <Image src={nosotros[index].attributes.imgnosotros.data.attributes.url} />
    }
  }

  return (
    
    <>
      {!nosotros ? (
          <Loading />
        ) : 
          size(nosotros) === 0 ? (
            <div className={styles.listEmpty}>
              <Image src='/img/hidelist.png' />
              <h1>¡ Sin publicación !</h1>
            </div>
        ) : (
          <div className={styles.containerMainPub}>
            <div className={styles.containerPub}>
              <Slider {...settings}>
                {map(nosotros, (nosotro) => (
                  <div key={nosotro.id}>
                    <Image src={nosotro.attributes.imgnosotros.data.attributes.url} /> 
                  </div>
                ))}
              </Slider>
            </div>
          </div> 
        )}

    </>

  )
}
