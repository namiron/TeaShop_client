import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/Button'

import { PUBLIC_URL } from '@/config/url.config'

import {
	ALL_IN,
	GO_TO_SHOP,
	Y_SHOPPING_Y_PLEASURE
} from '@/constants/data.constants'
import { SITE_DESCRIPTION } from '@/constants/seo.constants'

import styles from './Hero.module.scss'

export function Hero() {
	return (
		<div className={styles.section}>
			<h1 className={styles.heading}>
				{Y_SHOPPING_Y_PLEASURE} – <span>{ALL_IN}</span>
			</h1>
			<p className={styles.description}>{SITE_DESCRIPTION}</p>
			<Link href={PUBLIC_URL.explorer()}>
				<Button variant='primary'>
					{GO_TO_SHOP}
					<ArrowRight />
				</Button>
			</Link>
		</div>
	)
}
