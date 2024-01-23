import { Blog } from "@/api"
import styles from './id.module.css'

export default function PubId(props) {

  const { id } = props

  const pub = id.attributes

  return (
    
    <h1>{pub.title}</h1>

  )
}

export async function getServerSideProps(context){

  const {params: {id}} = context

  const idCtrl = new Blog()
  const response = await idCtrl.getById(id)

  return {

    props: {
      id: response
    }

  }
}
