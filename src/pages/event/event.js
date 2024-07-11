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
      
      <Event
        title='Presentación'
        description='Lorem ipsum dolor sit amet consectetur adipiscing elit pretium, nibh viverra ac eu malesuada dignissim penatibus curabitur, conubia libero fermentum non tincidunt fusce condimentum. Netus sociis fringilla malesuada fermentum cras ridiculus et, lectus primis sociosqu etiam arcu lobortis nisi libero, pulvinar luctus sodales mus pretium sed.'
        image='ev1.png'
      />

    </BasicLayout>
  )
}
