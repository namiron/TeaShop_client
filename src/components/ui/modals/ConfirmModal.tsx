import { PropsWithChildren } from 'react'

import {
	ARE_YOU_SURE,
	CLOSE,
	CONFIRM,
	CONTINUE
} from '@/constants/data.constants'

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from '../AlertDialog'

interface ConfirmModalProps {
	handleClick: () => void
}

export function ConfirmModal({
	children,
	handleClick
}: PropsWithChildren<ConfirmModalProps>) {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>{ARE_YOU_SURE}</AlertDialogTitle>
					<AlertDialogDescription>{CONFIRM}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>{CLOSE}</AlertDialogCancel>
					<AlertDialogAction
						className='bg-blue-500 hover:bg-blue-500/90'
						onClick={() => handleClick()}
					>
						{CONTINUE}
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
