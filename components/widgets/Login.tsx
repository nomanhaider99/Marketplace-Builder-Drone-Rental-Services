'use client'

import React from 'react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import Link from 'next/link'
import { FieldValues, useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import toast from 'react-hot-toast'

const Login = () => {
    const {
        register,
        handleSubmit
    } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const submitLoginForm = async (data: FieldValues) => {
        await signIn("credentials", data)
            .then(() => {
                console.log('User LoggedIn!');
                toast.success('User LoggedIn Successfully!');
            })
            .catch((err) => {
                console.log(err);
                toast.error('User Authentication Failed!');
            })
            .finally(() => {
                console.log('Exited!');
            })
    }

    return (
        <div className='w-full flex justify-center items-center px-10 md:py-10 py-3'>
            <form
                onSubmit={handleSubmit(submitLoginForm)}
            >
                <div className='flex flex-col items-center gap-4 text-primarycolor'>
                    <div><Logo /></div>
                    <div className='text-[22px] font-bold text-center'>YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE</div>
                    <div className='flex flex-col gap-2'>
                        <input
                            type="text"
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
                    </div>
                    <div className='text-textgray text-[12px] text-center'>By logging in, you agree to Nike's <span className='font-medium underline'>Privacy Policy</span> <br /> and <span className='font-medium underline'>Terms of Use.</span></div>
                    <div>
                        <Button
                            text='SIGN IN'
                            className='rounded w-[324px] text-[11px]'
                            type='submit'
                        />
                    </div>
                    <div className='text-[12px] text-textgray'>Not a Member? <span className='text-primarycolor underline cursor-pointer'><Link href="/register">Join Us</Link></span>.</div>
                </div>
            </form>
        </div>
    )
}

export default Login