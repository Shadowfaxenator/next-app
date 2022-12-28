const getPeople = async () =>{
    const res = new Promise(res => {
        setTimeout(()=>{
            res(6)
        },3000)
    })

    return res
      //df
}


export default async function People() {
    const people = await getPeople()

    return (<h1>{people}</h1>)
}