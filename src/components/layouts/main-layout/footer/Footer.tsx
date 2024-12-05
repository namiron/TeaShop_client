import { FOOTER } from '@/constants/data.constants'

import styles from './Footer.module.scss'

export function Footer() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.footer}>
				teashop.com &copy; 2024 {FOOTER}
			</div>
		</div>
	)
}
