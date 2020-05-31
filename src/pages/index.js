import "../style.css"
import React from "react"
const Main = React.lazy(() =>
    import("../components/main")
)

export default () => {
    const isSSR = typeof window === "undefined"
    return (
        <>
            {!isSSR && (
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Main />
                </React.Suspense>
            )}
        </>
    )
}