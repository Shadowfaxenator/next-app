export const dynamic = 'force-dynamic'

const getPeople = async () =>{
    const res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Nicosia")
    console.log("query")

    return await res.json()
      

}

export default async function IndexPage() {
    const people = await getPeople()
    return (
    <><ul>{people.unixtime}
    </ul>
    </>)
}