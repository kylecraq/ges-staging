type IframeWrapperProps = {
  title: string;
  src: string;
};
export const IframeWrapper = (props: IframeWrapperProps) => {
  const { title, src } = props;

  return (
    <iframe
      className=""
      src={src}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title={title}
    />
  );
};
