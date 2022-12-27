const getPeople = async () =>{
    const res = await fetch("https://swapi.dev/api/people")
    console.log("query")

    return await res.json()
      

}

export default async function IndexPage() {
    const people = await getPeople()
    return (
    <><ul>{people.results.map(p=><li>{p.name}</li>)}
    </ul>
    </>)
}