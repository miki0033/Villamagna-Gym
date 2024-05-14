const ContactIcon = ({
  icon,
  text,
  alt,
}: {
  icon: string;
  text: string;
  alt?: string;
}) => {
  return (
    <div className="flex flex-row gap-2">
      <div className="w-[24px] h-auto">
        <img src={icon} alt={alt} />
      </div>
      <div>{text}</div>
    </div>
  );
};

export default ContactIcon;
