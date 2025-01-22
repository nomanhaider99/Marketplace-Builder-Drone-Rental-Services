import { auth } from "@/auth";
import Hello from "@/components/ui/Hello";
import Hero from "@/components/ui/Hero";
import Text from "@/components/ui/Text";
import Best from "@/components/widgets/Best";
import Dont from "@/components/widgets/Dont";
import Essentials from "@/components/widgets/Essentials";
import Featured from "@/components/widgets/Featured";
import Gear from "@/components/widgets/Gear";
import Links from "@/components/widgets/Links";

export default async function Home() {
  return (
    <>
      <Hello />
      <Hero />
      <Text />
      <Best />
      <Featured />
      <Gear />
      <Dont />
      <Essentials />
      <Links />
    </>
  );
}
