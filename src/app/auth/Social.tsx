'use client'

import { useRouter } from 'next/navigation'
import { FaYandex } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

import { Button } from '@/components/ui/Button'

import { SERVER_URL } from '@/config/api.config'

import { GOOGLE } from '@/constants/data.constants'

import styles from './Auth.module.scss'

export function Social() {
	const router = useRouter()

	return (
		<div className={styles.social}>
			<Button
				variant='outline'
				onClick={() => router.push(`${SERVER_URL}/auth/google`)}
			>
				<FcGoogle />
				{GOOGLE}
			</Button>
		</div>
	)
}
