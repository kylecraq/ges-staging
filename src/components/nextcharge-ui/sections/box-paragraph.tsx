'use client';

import {
    IntroParagraph,
    IntroParagraphProps,
} from '@/components/nextcharge-ui/sections/intro-paragraph';
import {
    PrimaryButtonWithIcon,
    PrimaryButtonWithIconProps,
} from '@/components/nextcharge-ui/buttons/primary-with-icon';
import {cn} from '@/lib/utils';

type BoxParagraphProps = {
    className?: string;
    imgSrcDsk?: string;
    imgSrcMbl?: string;
    buttons?: PrimaryButtonWithIconProps[];
} & IntroParagraphProps;

export const BoxParagraph = (
    props: BoxParagraphProps,
    props1: BoxParagraphProps = props
) => {
    const {
        imgSrcDsk,
        imgSrcMbl,
        title,
        kicker,
        description,
        buttons,
        className,
    } = props1;

    const actualClassname = cn(
        className,
        `flex flex-col items-center justify-center gap-8 rounded-4xl p-8 px-3 md:p-12 xl:p-24 bg-center bg-cover`
    );

    return (
        <article className={actualClassname} style={{
            backgroundImage: `url(${imgSrcDsk})`
        }}>
            <IntroParagraph title={title} kicker={kicker} description={description}/>
            <div className="flex items-center gap-2.5">
                {buttons
                    ? buttons.map((buttonProps, index) => {
                        return (
                            <PrimaryButtonWithIcon
                                key={index}
                                icon={buttonProps.icon}
                                label={buttonProps.label}
                            />
                        );
                    })
                    : null}
            </div>
        </article>
    );
};