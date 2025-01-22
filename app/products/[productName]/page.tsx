import Detail from '@/components/ui/Detail';
import { ProductType } from '@/types/product';
import React from 'react';

const ProductPage = async ({ params }: { params: { productName: string } }) => {
    console.log(params.productName)
    const res = await fetch(`http://localhost:3000/api/products/${params.productName}`);

    if (!res.ok) {
        const errorData = await res.json();
        console.error(errorData.message);
        return <div>Error: {errorData.message}</div>;
    }

    const data: ProductType = await res.json();
    console.log(data);

    return (
        <div className='md:px-10 px-4 py-10 w-full'>
            <Detail
                title={data.productName}
                description={data.description}
                image={data.imageUrl as any}
                price={data.price}
                inventory={data.inventory}
                colors={data.colors}
            />
        </div>
    );
}

export default ProductPage;
