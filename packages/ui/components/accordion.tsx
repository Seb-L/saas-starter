/* eslint-disable react/no-multi-comp */

'use client'

import { Content, Header, Item, Root, Trigger } from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { cn } from '../utils/cn'

export const Accordion = Root

export const AccordionItem = forwardRef<ElementRef<typeof Item>, ComponentPropsWithoutRef<typeof Item>>(({
	className,
	...props
}, ref) => (
	<Item
		ref={ref}
		className={cn('border-b', className)}
		{...props}
	/>
))

AccordionItem.displayName = 'AccordionItem'

export const AccordionTrigger = forwardRef<ElementRef<typeof Trigger>, ComponentPropsWithoutRef<typeof Trigger>>(({
	className,
	children,
	...props
}, ref) => (
	<Header className='flex'>
		<Trigger
			ref={ref}
			className={cn(
				'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
				className
			)}
			{...props}
		>
			{children}

			<ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200' />
		</Trigger>
	</Header>
))

AccordionTrigger.displayName = Trigger.displayName

export const AccordionContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(({
	className,
	children,
	...props
}, ref) => (
	<Content
		ref={ref}
		className={cn(
			'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
			className
		)}
		{...props}
	>
		<div className='pb-4 pt-0'>
			{children}
		</div>
	</Content>
))

AccordionContent.displayName = Content.displayName
