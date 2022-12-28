//export const dynamic = 'force-dynamic'
import {Suspense} from 'react'
import People from './people'

export default async function IndexPage() {
    return (
    <>
    <h1>rtyouio</h1>

    <Suspense fallback={<div>Loading....</div>}>
        <People></People>
    </Suspense>

    </>)
}