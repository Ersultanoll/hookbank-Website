import Better from "@/components/Better";
import Business from "@/components/Business";
import Companies from "@/components/Companies";
import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import Lets from "@/components/Lets";
import Paycard from "@/components/Paycard";
import People from "@/components/People";
import Users from "@/components/Users";


export default function Home() {
  return (
    <main>
      <Hero/>
      {/**/}
      <Users/>
      <Business/>
      <Paycard/>
      <Better/>
      <People/>
      <Feedback/>
      <Companies/>
      <Lets/>
    </main>
  );
}
