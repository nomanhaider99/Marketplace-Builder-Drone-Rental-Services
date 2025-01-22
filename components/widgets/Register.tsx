'use client'

import React from 'react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import Link from 'next/link'
import { FieldValues, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const Register = () => {
    const {
        register,
        handleSubmit
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });
    const router = useRouter();

    const submitRegisterForm = async (data: FieldValues) => {
        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error:', errorData.message);
                return; 
            }

            toast.success('User Created Successfully!');
            router.push('/login');

            console.log('User Created!');
        } catch (err) {
            console.error('Error creating user:', err);
            toast.error('Failed To Create User!');
        } finally {
            console.log('Exited!');
        }
    };


    return (
        <div className='w-full flex justify-center items-center md:px-10 px-10 py-10'>
            <div className='w-[324px] flex flex-col items-center gap-2'>
                <div><Logo /></div>
                <div className='text-[22px] font-bold'>BECOME A NIKE MEMBER</div>
                <div className='text-[14px] text-center text-textgray'>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</div>
                <form onSubmit={handleSubmit(submitRegisterForm)}>
                    <div className='flex flex-col gap-2 items-center'>
                        <input
                            type="email"
                            className='px-4 py-2 bg-white border-[0.5px] border-zinc-400 text-[16px] w-[324px]'
                            placeholder='Email Address'
                            {...register("email")}
                        />
                        <input
                            type="password"
                            className='px-4 py-2 bg-white border-[0.5px] border-zinc-400 text-[16px] w-[324px]'
                            placeholder='Password'
                            {...register("password")}
                        />
                        <input
                            type="text"
                            className='px-4 py-2 bg-white border-[0.5px] border-zinc-400 text-[16px] w-[324px]'
                            placeholder='Full Name'
                            {...register("name")}
                        />
                        <div className='text-textgray text-[14px] text-center'>By logging in, you agree to Nike's <span className='font-medium underline'>Privacy Policy</span> <br /> and <span className='font-medium underline'>Terms of Use.</span></div>
                        <div>
                            <Button
                                text='JOIN US'
                                className='rounded w-[324px] text-[11px]'
                                type='submit'
                            />
                        </div>
                        <div className='text-[12px] text-textgray'>Already a Member? <span className='text-primarycolor underline cursor-pointer'><Link href="/login">Sign In</Link></span>.</div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register