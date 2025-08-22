'use client';
import { redirect, useRouter } from "next/navigation";


export default function UserRouter() {

     const router = useRouter()

    function onClickHandler(){
        console.log('Operation Complete')

        // router.replace('/')
        //router.push('/')
        redirect('/')
    }

    return (
        <div>
             <h1>useRouter</h1>
             <button onClick={onClickHandler}>button</button>
        </div>
    );
}