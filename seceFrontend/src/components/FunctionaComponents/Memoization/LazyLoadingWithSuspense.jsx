import {lazy,Suspense} from 'react'
const LazyComponent = lazy(()=>import ("../About"))

const LazyLoadingWithSuspense = () => {
    return (
        <div>
            <Suspense fallback={<h1>Loading...</h1>}>
                <h1>lazy loading page</h1>
                <LazyComponent />
            </Suspense>

        </div>
    )
}

export default LazyLoadingWithSuspense;