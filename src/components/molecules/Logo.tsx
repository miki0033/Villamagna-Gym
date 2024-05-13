import Avatar from "@mui/material/Avatar";

const Logo = () => {
  return (
    <div className="flex justify-center rounded-full overflow-hidden w-full">
      <Avatar
        alt="logo"
        src="../../../public/logo-only.png"
        sx={{ width: 56, height: 56 }}
      />
    </div>
  );
};

export default Logo;
