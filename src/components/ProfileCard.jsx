import profile from "../assets/images/profile.jpg";

export default function ProfileCard() {
  return (
    <div
     className="
rounded-3xl
bg-white/5
backdrop-blur-xl
border border-white/10
p-6
flex
justify-center
items-start
pt-10
hover:border-violet-500/40
transition-all
duration-300
"
    >
     <img
  src={profile}
  alt="Piya Pal"
 className="
  w-72
  mt-10
  rounded-2xl
  object-cover
  shadow-2xl
"
/>
    </div>
  );
}