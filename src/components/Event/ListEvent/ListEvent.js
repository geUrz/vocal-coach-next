import { useEffect, useState } from "react"
import { map, size } from "lodash"
import { Event as EventApi } from "@/api"
import { Loading } from "@/components/Layout/Loading"
import { Event } from "./Event"
import { ListEmpty } from "@/components/Layout/ListEmpty"

const eventCtrl = new EventApi()

export function ListEvent(props) {

  const {reload, onReload} = props

  const [events, setEvents] = useState(null) 

  useEffect(() => {
    (async () => {
      try {
        const response = await eventCtrl.getAll()
        setEvents(response.data)
      } catch (error) {
          console.error(error)
      }
    })()
  }, [reload])

  return (
    
    <>
      {!events ? (
        <Loading />
      ) : 
      size(events) === 0 ? (
        <ListEmpty />
      ) : (
        <div>
          {map(events, (ev) => (
              <Event
                key={ev.id} 
                eventId={ev.id}
                event={ev.attributes}  
                onReload={onReload}
              />
          ))}
        </div>
      )}

    </>

  )
}
