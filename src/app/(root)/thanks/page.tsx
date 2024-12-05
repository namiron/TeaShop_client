import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui/Button'

import { PUBLIC_URL } from '@/config/url.config'

import { THANK, THANKS_DESCRIPTION, TO_HOME } from '@/constants/data.constants'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import styles from '../hero/Hero.module.scss'

export const metadata: Metadata = {
	title: 'Thank you for your order',
	...NO_INDEX_PAGE
}

export default function ThanksPage() {
	return (
		<div className={styles.section}>
			<h1 className={styles.heading}>{THANK}</h1>
			<p className={styles.description}>{THANKS_DESCRIPTION}</p>
			<Link href={PUBLIC_URL.home()}>
				<Button variant='primary'>
					{TO_HOME}
					<ArrowRight />
				</Button>
			</Link>
		</div>
	)
}
