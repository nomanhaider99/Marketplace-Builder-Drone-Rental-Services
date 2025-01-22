import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Button from '@/components/ui/Button';
import Link from 'next/link';


const page = async ({
    params,
  }: {
    params: Promise<{ label_id: string }>
  }) => {
    const { label_id } = await params;
    const res = await fetch(`https://api.shipengine.com/v1/labels/${label_id}`, {
        headers: {
            'Content-Type': 'application/json',
            'API-Key': 'TEST_Z6uXMcHRqj7O4r+xNaBhszTbOTyHbRurU1Owm7JNx9Y'
        }
    });
    const result: ShipmentType = await res.json();
    console.log(result);
    return (
        <div className='w-full flex justify-center items-center min-h-screen'>
            <Card className='md:w-[40vw]'>
                <CardHeader>
                    <CardTitle className='flex justify-between items-center'>
                        <div className='text-2xl'>Shippment Details</div>
                        <div>#{result.label_id}</div>
                    </CardTitle>
                    <CardDescription>Here you can see all your shippment details along with track to track your parcel.</CardDescription>
                </CardHeader>
                <CardContent className='w-full flex flex-col gap-4'>
                    <div className='w-full flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <div className='text-sm'>Full Name:</div>
                            <div className='text-black'>{result.ship_to.name}</div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='text-sm'>Phone Number:</div>
                            <div className='text-black'>{result.ship_to.phone}</div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='text-sm'>Ship To:</div>
                            <div className='text-black'>{result.ship_to.city_locality}, {result.ship_to.country_code}</div>
                        </div>
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <div className='text-sm'>Full Address:</div>
                            <div className=''>{result.ship_to.address_line1}</div>
                        </div>
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <div className='text-sm'>Packages:</div>
                            <div>{result.packages.map((item, index) => (
                                <div
                                    key={index}
                                    className='flex justify-between items-center gap-5'
                                >
                                    <div>{index + 1}.</div>
                                    <div>ID: {item.package_id}</div>
                                    <div>Weight: {item.weight.value} {item.weight.unit}</div>
                                    <div></div>
                                </div>
                            ))}</div>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className='w-full flex flex-col gap-2'>
                    <Link href={result.label_download.pdf} className='w-full'>
                        <Button
                            text='Download Invoice'
                            className='w-full'
                            secondary
                        />
                    </Link>
                    <Button
                        text='Track Shippment'
                        className='w-full'
                    />
                </CardFooter>
            </Card>
        </div>
    )
}

export default page