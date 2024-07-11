import { Image } from 'semantic-ui-react'
import { BasicLayout } from '@/layouts'
import styles from './event.module.css'
import { Event } from '@/components/Event/Event'

export default function Eventos() {

  return (
    <BasicLayout relative>
      <div className={styles.banner}>
        <Image src='/img/ev3.jpg' />
        <div>
          <h1>eventos y conciertos</h1>
        </div>
      </div>

      <div className={styles.sectionEv}>
        <div className={styles.containerEv}>

          <Event
            title='Presentación'
            description='Lorem ipsum dolor sit amet consectetur adipiscing elit pretium, nibh viverra ac eu malesuada dignissim penatibus curabitur, conubia libero fermentum non tincidunt fusce condimentum. Netus sociis fringilla malesuada fermentum cras ridiculus et, lectus primis sociosqu etiam arcu lobortis nisi libero, pulvinar luctus sodales mus pretium sed.'
            image='ev1/ev3.jpg'
            img1='ev1/ev1.jpg'
            img2='ev1/ev2.jpg'
            img3='ev1/ev3.jpg'
          />

          <Event
            title='Presentación'
            description='Lorem ipsum dolor sit amet consectetur adipiscing elit pretium, nibh viverra ac eu malesuada dignissim penatibus curabitur, conubia libero fermentum non tincidunt fusce condimentum. Netus sociis fringilla malesuada fermentum cras ridiculus et, lectus primis sociosqu etiam arcu lobortis nisi libero, pulvinar luctus sodales mus pretium sed.'
            image='ev2/ev2.jpg'
            img1='ev2/ev1.jpg'
            img2='ev2/ev2.jpg'
            img3='ev2/ev3.jpg'
          />

        </div>
      </div>

    </BasicLayout>
  )
}
