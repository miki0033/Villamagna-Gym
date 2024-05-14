import ContactIcon from "./ContactIcon";

const Contact = () => {
  return (
    <div className="contact w-full bg-red-500 mt-2 pb-8 gap-2 flex flex-col items-center text-black font-medium text-xl">
      <p>Per ulteriori informazioni contattimi su:</p>

      <div className="flex flex-row md:flex-col gap-4 w-4/5 flex-nowrap justify-evenly">
        <ContactIcon
          icon={"./icons8-whatsapp-colored.png"}
          text={"320 088 0052"}
          alt={"Whatsapp"}
        ></ContactIcon>
        <ContactIcon
          icon={"./icons8-instagram-colored.png"}
          text={"@profilo"}
          alt={"Instagram"}
        ></ContactIcon>
        <ContactIcon
          icon={"./icons8-email-colored.png"}
          text={"email.placeholder@gmail.com"}
          alt={"Email"}
        ></ContactIcon>
        <ContactIcon
          icon={"./icons8-telegram-colored.png"}
          text={"profilo"}
          alt={"Telegram"}
        ></ContactIcon>
      </div>
    </div>
  );
};

export default Contact;
