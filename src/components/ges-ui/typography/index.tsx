import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { ComponentProps, useRef } from 'react';

export type HeadingSizes = 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs';
export type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const headingVariants = cva('font-mono', {
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
});

interface HeadingProps
  extends ComponentProps<HeadingTags>, VariantProps<typeof headingVariants> {
  as?: HeadingTags;
}

export function Heading({
  size,
  as: Tag = 'h2',
  className,
  children,
  ...props
}: HeadingProps) {
  const ref = useRef<HTMLHeadingElement | null>(null);

  return (
    <Tag
      className={cn(headingVariants({ size }), className)}
      ref={ref}
      {...props}
    >
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
});

interface BodyTextProps
  extends ComponentProps<'p'>, VariantProps<typeof bodyTextVariants> {}

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
});

interface MenuLabelProps
  extends ComponentProps<'span'>, VariantProps<typeof menuLabelVariants> {}

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
