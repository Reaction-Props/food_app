import {Await, useLoaderData} from "react-router-dom";
import {Product} from "../../components/interfaces/product.interfaces.ts";
import {Suspense} from "react";

export function ProductComponent() {
    const data = useLoaderData() as { data: Product };
    return <>
        <Suspense fallback={'Loading...'}>
            <Await resolve={data.data}>
                {({data}: { data: Product }) => (
                    <>
                        Product - {data.name}
                    </>
                )}
            </Await>
        </Suspense>
    </>;
}
