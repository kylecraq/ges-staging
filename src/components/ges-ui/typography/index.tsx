import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { ComponentProps, useRef } from 'react';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export type HeadingSizes = 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs';
export type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingEffects = 'text-wave-reveal' | 'text-fade-in-reveal';

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
  effect?: HeadingEffects;
}

export function Heading({
  size,
  as: Tag = 'h2',
  effect,
  className,
  children,
  ...props
}: HeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!ref.current || effect !== 'text-wave-reveal') return;
    const element = ref.current;

    const splitTexts = new SplitText(element, {
      type: 'lines,words,chars',
      linesClass: 'line-wrapper',
      wordsClass: 'word',
      charsClass: 'char',
    });

    gsap.set(splitTexts.words, {
      overflow: 'clip',
    });

    const fontSize = parseFloat(getComputedStyle(element).fontSize);
    const yOffset = fontSize * 1.2;
    gsap.from(splitTexts.chars, {
      y: yOffset,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.02,
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        onLeave: () => splitTexts.revert(),
        onLeaveBack: () => splitTexts.revert(),
      },
    });
  }, []);

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
