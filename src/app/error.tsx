"use client"

import Image from "next/image"
import styles from 'app/sass/global-error.module.sass'

export default function GlobalError({ reset }: ErrorPageProps) {
    return(
        <main className={styles.Error}>
            <h1 className={styles.Error__title}>Something went wrong!!</h1>
            <Image 
                src='/images/error.png'
                width={500}
                height={500}
                alt="Failed"
            /> 
            <p className={styles.Error__message}>It seems that an error has occurred</p>
            <button onClick={ reset } className={styles.Error__button}>Retry again</button>
        </main>
    )
}