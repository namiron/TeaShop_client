import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { CategoryEdit } from './CategoryEdit'

export const metadata: Metadata = {
	title: 'Category Setting',
	...NO_INDEX_PAGE
}

export default function CategoryEditPage() {
	return <CategoryEdit />
}
