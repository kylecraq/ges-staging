import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

const headingVariants = cva('', {
  variants: {
    size: {
      xxl: 'heading-xxl',
      xl: 'heading-xl',
      l: 'heading-l',
      m: 'heading-m',
      s: 'heading-s',
      xs: 'heading-xs',
      xxs: 'heading-xxs',
    },
  },
  defaultVariants: {
    size: 'l',
  },
})

interface HeadingProps
  extends ComponentProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>,
    VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function Heading({
  size,
  as: Tag = 'h2',
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Tag className={cn(headingVariants({ size }), className)} {...props}>
      {children}
    </Tag>
  );
}

// Body Text Component with CVA
const bodyTextVariants = cva('', {
  variants: {
    variant: {
      text: 'body-text',
      caption: 'body-caption',
      button: 'body-button font-medium',
      label: 'body-label',
    },
  },
  defaultVariants: {
    variant: 'text',
  },
})

interface BodyTextProps
  extends ComponentProps<'p'>,
    VariantProps<typeof bodyTextVariants> {}

export function BodyText({
  variant,
  className,
  children,
  ...props
}: BodyTextProps) {
  return (
    <p className={cn(bodyTextVariants({ variant }), className)} {...props}>
      {children}
    </p>
  );
}

// Menu Label Component with CVA
const menuLabelVariants = cva('', {
  variants: {
    variant: {
      heading: 'menu-heading font-semibold',
      body: 'menu-body',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
})

interface MenuLabelProps
  extends ComponentProps<'span'>,
    VariantProps<typeof menuLabelVariants> {}

export function MenuLabel({
  variant,
  className,
  children,
  ...props
}: MenuLabelProps) {
  return (
    <span className={cn(menuLabelVariants({ variant }), className)} {...props}>
      {children}
    </span>
  );
}
