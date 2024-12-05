'use client'

import { Trash } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import { Textarea } from '@/components/ui/Textarea'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form-elements/Form'
import { Input } from '@/components/ui/form-elements/Input'
import { ConfirmModal } from '@/components/ui/modals/ConfirmModal'

import {
	ADD_NEW_CATEGORY,
	CHANGE_DATA,
	CREATE,
	CREATE_CATEGORY,
	DESCR,
	EDIT_DATA_CATEGORY,
	NAME,
	SAVE
} from '@/constants/data.constants'

import { useCreateCategory } from '@/hooks/queries/categories/useCreateCategory'
import { useDeleteCategory } from '@/hooks/queries/categories/useDeleteCategory'
import { useUpdateCategory } from '@/hooks/queries/categories/useUpdateCategory'

import { ICategory, ICategoryInput } from '@/shared/types/category.interface'

import styles from '../Store.module.scss'

interface ICategoryForm {
	category?: ICategory | null
}

export function CategoryForm({ category }: ICategoryForm) {
	const { createCategory, isLoadingCreate } = useCreateCategory()
	const { updateCategory, isLoadingUpdate } = useUpdateCategory()
	const { deleteCategory, isLoadingDelete } = useDeleteCategory()

	const title = category ? CHANGE_DATA : CREATE_CATEGORY
	const description = category ? EDIT_DATA_CATEGORY : ADD_NEW_CATEGORY
	const action = category ? SAVE : CREATE

	const form = useForm<ICategoryInput>({
		mode: 'onChange',
		values: {
			title: category?.title || '',
			description: category?.description || ''
		}
	})

	const onSubmit: SubmitHandler<ICategoryInput> = data => {
		if (category) updateCategory(data)
		else createCategory(data)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<Heading title={title} description={description} />
				{category && (
					<ConfirmModal handleClick={() => deleteCategory()}>
						<Button
							size='icon'
							variant='primary'
							disabled={isLoadingDelete}
						>
							<Trash className='size-4' />
						</Button>
					</ConfirmModal>
				)}
			</div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className={styles.fields}>
						<FormField
							control={form.control}
							name='title'
							rules={{
								required: 'Title required'
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>{NAME}</FormLabel>
									<FormControl>
										<Input
											{...field}
											placeholder='Category Name'
											disabled={
												isLoadingCreate ||
												isLoadingUpdate
											}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name='description'
						rules={{
							required: 'Description required'
						}}
						render={({ field }) => (
							<FormItem>
								<FormLabel>{DESCR}</FormLabel>
								<FormControl>
									<Textarea
										{...field}
										placeholder='Category Description'
										disabled={
											isLoadingCreate || isLoadingUpdate
										}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						variant='primary'
						disabled={isLoadingCreate || isLoadingUpdate}
					>
						{action}
					</Button>
				</form>
			</Form>
		</div>
	)
}
