/* eslint-disable react/no-multi-comp */

'use client'

import { Close, Content, Description, Overlay, Portal, Root, Title, Trigger } from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { ComponentPropsWithoutRef, ElementRef, forwardRef, HTMLAttributes } from 'react'

import { cn } from '../utils/cn'

export const Dialog = Root

export const DialogTrigger = Trigger

export const DialogPortal = Portal

export const DialogClose = Close

export const DialogOverlay = forwardRef<ElementRef<typeof Overlay>, ComponentPropsWithoutRef<typeof Overlay>>(({
	className,
	...props
}, ref) => (
	<Overlay
		ref={ref}
		className={cn(
			'bg-background/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 backdrop-blur-sm',
			className
		)}
		{...props}
	/>
))

DialogOverlay.displayName = Overlay.displayName

export const DialogContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(({
	className,
	children,
	...props
}, ref) => (
	<DialogPortal>
		<DialogOverlay />

		<Content
			ref={ref}
			className={cn(
				'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 sm:rounded-lg md:w-full',
				className
			)}
			{...props}
		>
			{children}

			<Close className='ring-offset-background focus:ring-ring data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent'>
				<X className='h-4 w-4' />

				<span className='sr-only'>
					Close
				</span>
			</Close>
		</Content>
	</DialogPortal>
))

DialogContent.displayName = Content.displayName

export const DialogHeader = ({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			'flex flex-col space-y-1.5 text-center sm:text-left',
			className
		)}
		{...props}
	/>
)

DialogHeader.displayName = 'DialogHeader'

export const DialogFooter = ({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
			className
		)}
		{...props}
	/>
)

DialogFooter.displayName = 'DialogFooter'

export const DialogTitle = forwardRef<ElementRef<typeof Title>, ComponentPropsWithoutRef<typeof Title>>(({
	className,
	...props
}, ref) => (
	<Title
		ref={ref}
		className={cn(
			'text-lg font-semibold leading-none tracking-tight',
			className
		)}
		{...props}
	/>
))

DialogTitle.displayName = Title.displayName

export const DialogDescription = forwardRef<ElementRef<typeof Description>, ComponentPropsWithoutRef<typeof Description>>(({
	className,
	...props
}, ref) => (
	<Description
		ref={ref}
		className={cn('text-muted-foreground text-sm', className)}
		{...props}
	/>
))

DialogDescription.displayName = Description.displayName
